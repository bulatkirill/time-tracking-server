const db = require('./index');

const clientRepository = {
    getClients: async () => {
        return await db.Client.findAll();
    },
    getClientById: async (id) => {
        return await db.Client.findByPk(id);
    },
    addClient: async (client) => {
        return await db.Client.create(client);
    },
    updateClient: async (client, id) => {
        return await db.Client.update(client, {
            where: {
                id: id
            },
            // returning true tells to return the updated object
            returning: true
        });
    },
};

module.exports = clientRepository;
