import * as clientRepository from './../db/client-repository';

export const add = async (client) => {
    return await clientRepository.addClient(client);
};

export const partialUpdate = async (client, id) => {
    if (client === null || id === null) {
        throw new Error(`client = ${JSON.stringify(client)} doesn't have id, cannot be updated.`);
    }
    let clientDb = await clientRepository.getClientById(id);
    Object.keys(client).forEach(key => {
        clientDb[key] = client[key];
    });
    return await clientDb.save();
};

export const getAll = async () => {
    return await clientRepository.getClients();
};

export const getById = async (id) => {
    return await clientRepository.getClientById(id);
};
