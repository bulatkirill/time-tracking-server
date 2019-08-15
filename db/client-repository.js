import * as db from './index';

const getClientsCommon = async (includes = []) => {
    return await db.Client.findAll({
        include: includes
    });
};

const getClientByIdCommon = async (id, includes = []) => {
    return await db.Client.findByPk(id, {
        include: includes
    });
};

export const getClients = async (withTimeEntries = false) => {
    let includeOptions = [];
    if (withTimeEntries) {
        includeOptions.push(db.TimeEntry);
    }
    return await getClientsCommon(includeOptions);
};

export const getClientById = async (id, withTimeEntries = false) => {
    const includeOptions = [];
    if (withTimeEntries) {
        includeOptions.push(db.TimeEntry);
    }
    return await getClientByIdCommon(id, includeOptions);
};

export const addClient = async (client) => {
    return await db.Client.create(client);
};

export const updateClient = async (client, id) => {
    return await db.Client.update(client, {
        where: {
            id: id
        },
        // returning true tells to return the updated object
        returning: true
    });
};
