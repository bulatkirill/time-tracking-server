const timeEntryRepository = require('../db/time-entry-repository');

const parseUrl = (url) => {
    // algorithm took from https://tools.ietf.org/html/rfc3986#appendix-B
    const pattern = '^(([^:\\/?#]+):)?(\\/\\/([^\\/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?';
    const result = url.match(pattern);
    result.forEach((element) => {
        console.log(`Index of element ${element}`);
    });
    return result; //returns host
};

const timeEntryService = {
    add: (timeEntry) => {
        const fullUrl = timeEntry.fullUrl;
        const host = parseUrl(fullUrl)[4];
        timeEntry.host = host;
        timeEntryRepository.addTimeEntry(timeEntry);
    },
    update: (timeEntry) => {
        if (timeEntry === null || !timeEntry.id) {
            throw new Error(`Time Entry = ${JSON.stringify(timeEntry)} doesn't have id, cannot be updated.`);
        }
        return timeEntryRepository.updateTimeEntry(timeEntry);
    },
    getAll: async () => {
        return await timeEntryRepository.getTimeEntries();
    },
    getById: (id) => {
        return timeEntryRepository.getTimeEntryById(id);
    }
};

module.exports = timeEntryService;


