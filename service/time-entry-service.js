const timeEntryRepository = require('../db/time-entry-repository');

const parseUrl = (url) => {
    // algorithm took from https://tools.ietf.org/html/rfc3986#appendix-B
    const pattern = '^(([^:\\/?#]+):)?(\\/\\/([^\\/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?';
    return url.match(pattern);
};

const timeEntryService = {
    add: async (timeEntry) => {
        const fullUrl = timeEntry.fullUrl;
        const host = parseUrl(fullUrl)[4];
        timeEntry.host = host;
        return await timeEntryRepository.addTimeEntry(timeEntry);
    },
    update: async (timeEntry, id) => {
        //TODO
        throw new Error(`Time Entry = ${JSON.stringify(timeEntry)} doesn't have id, cannot be updated.`);
        if (timeEntry === null || id === null) {
            throw new Error(`Time Entry = ${JSON.stringify(timeEntry)} doesn't have id, cannot be updated.`);
        }
        return await timeEntryRepository.updateTimeEntry(timeEntry, id);
    },
    getAll: async () => {
        return await timeEntryRepository.getTimeEntries();
    },
    getById: async (id) => {
        return await timeEntryRepository.getTimeEntryById(id);
    }
};

module.exports = timeEntryService;


