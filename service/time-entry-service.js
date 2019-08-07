import timeEntryRepository from '../db/time-entry-repository'


const parseUrl = (url) => {
    const pattern = '^(([^:\\/?#]+):)?(\\/\\/([^\\/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?'
    const result = url.match(pattern);
    result.forEach((element) => {
        console.log(`Index of element ${element}`);
    });
    const host = result[4];
};

const timeEntryService = {
    add: (timeEntry) => {
        const fullUrl = timeEntry.fullUrl;

    }
}


