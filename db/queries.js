const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'time_tracker',
    host: 'localhost',
    database: 'time_tracker',
    password: 'time_tracker',
    port: 5432
});

const database = {
    getWebsites: async () => {
        const result = await pool.query('SELECT * FROM website');
        return result.rows;
    },
    getWebsite: async (id) => {
        const result = await pool.query('SELECT * FROM website WHERE ID = $1', [id]);
        return result.rows;
    },

};


module.exports = database;



