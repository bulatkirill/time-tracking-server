import * as clientRepository from './../db/client-repository';
import * as logger from './logger-service';

export const add = async (client) => {
    return await clientRepository.addClient(client);
};

export const partialUpdate = async (client, id) => {
    if (client === null || id === null) {
        throw new Error(`client = ${JSON.stringify(client)} doesn't have id, cannot be updated.`);
    }
    const clientDb = await clientRepository.getClientById(id);
    //TODO
    for(const key in client) {
        clientDb[key] = client[key];
    }
    // TODO this is not working with sqlite, because it is *probably* not implemented by squelize
    let [cntUpdated, updatedRows] = await clientRepository.updateClient(client, id);
    logger.log(`Number of update time entries for id = ${id} = ${cntUpdated}`);
    return updatedRows[0];
};

export const getAll = async () => {
    return await clientRepository.getClients();
};

export const getById = async (id) => {
    return await clientRepository.getClientById(id);
};
