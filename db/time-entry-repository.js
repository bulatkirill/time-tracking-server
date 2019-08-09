const db = require('./index');
const timeEntryRepository = {
    getTimeEntries: async () => {
        return await db.TimeEntry.findAll();
    },
    getTimeEntryById: async (id) => {
        return await db.TimeEntry.findByPk(id);
    },
    addTimeEntry: async (timeEntry) => {
        return await db.TimeEntry.create(timeEntry);
    },
    updateTimeEntry: async (timeEntry, id) => {
        return await db.TimeEntry.update(timeEntry, {
            where: {
                id: id
            },
            returning: true
        });
    }
};


module.exports = timeEntryRepository;

//could be rewritten in ES6 way
// export const getTimeEntries = async () => {
//     return await db.TimeEntry.findAll();
// };
// export const getTimeEntryById = async (id) => {
//     return await db.TimeEntry.findById(id);
// };
// export const addTimeEntry = async (timeEntry) => {
//     return await db.TimeEntry.create(timeEntry);
// };
// export default 'Hello world';
