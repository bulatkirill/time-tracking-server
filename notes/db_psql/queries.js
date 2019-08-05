const Pool = require('pg/lib').Pool;

const database = {
    pool: new Pool({
        user: 'time_tracker',
        host: 'localhost',
        database: 'time_tracker',
        password: 'time_tracker',
        port: 5432
    }),
    getWebsites: async () => {
        const result = await this.pool.query('SELECT * FROM website');
        return result.rows;
    },
    getWebsite: async (id) => {
        const result = await this.pool.query('SELECT * FROM website WHERE ID = $1', [id]);
        return result.rows;
    }
};


module.exports = database;



