const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'time_tracker',
    host: 'localhost',
    database: 'time_tracker',
    password: 'time_tracker',
    port: 5432
});

const database = {
    // callback variant
    getWebsitesCallback: (callback) => {
        pool.query('SELECT * FROM website', (error, results) => {
            if (error) {
                throw error;
            }
            callback(results.rows);
        })
    },
    // async/await variant
    getWebsiteAsync: async () => {
        const result = await pool.query('SELECT * FROM website');
        return result.rows;
    },
    // Promise/await
    getWebsitePromise: () => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM website', (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results.rows);
            })
        })
    }
};


module.exports = database;



