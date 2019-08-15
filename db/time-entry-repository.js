const db = require('./index');

export const getTimeEntries = async () => {
    return await db.TimeEntry.findAll();
};
export const getTimeEntryById = async (id) => {
    return await db.TimeEntry.findByPk(id);
};
export const addTimeEntry = async (timeEntry) => {
    return await db.TimeEntry.create(timeEntry);
};
export const updateTimeEntry = async (timeEntry, id) => {
    return await db.TimeEntry.update(timeEntry, {
        where: {
            id: id
        },
        // returning true tells to return the updated object
        returning: true
    });
};
