import * as timeEntryRepository from '../db/time-entry-repository';

const parseUrl = (url) => {
    // algorithm took from https://tools.ietf.org/html/rfc3986#appendix-B
    const pattern = '^(([^:\\/?#]+):)?(\\/\\/([^\\/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?';
    return url.match(pattern);
};

const timeEntryService = {
    add: async (timeEntries) => {
        let timeEntriesAdded = [];
        // handle the bulk create
        if (timeEntries.constructor !== Array) {
            timeEntries = [timeEntries];
        }
        for (const timeEntry of timeEntries) {
            const fullUrl = timeEntry.fullUrl;
            const host = parseUrl(fullUrl)[4];
            timeEntry.host = host;
            timeEntriesAdded.push(await timeEntryRepository.addTimeEntry(timeEntry));
        }
        return timeEntriesAdded;
    },
    partialUpdate: async (timeEntry, id) => {
        if (timeEntry === null || id === null) {
            throw new Error(`Time Entry = ${JSON.stringify(timeEntry)} doesn't have id, cannot be updated.`);
        }
        let timeEntryDb = await timeEntryRepository.getTimeEntryById(id);
        Object.keys(timeEntry).forEach(key => {
            timeEntryDb[key] = timeEntry[key];
        });
        return await timeEntryDb.save();
    },
    getAll: async () => {
        return await timeEntryRepository.getTimeEntries();
    },
    getById: async (id) => {
        return await timeEntryRepository.getTimeEntryById(id);
    }
};

module.exports = timeEntryService;


