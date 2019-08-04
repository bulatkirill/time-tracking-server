const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'time_tracker',
    password: '',
    port: 5432
});

const database = {
    // getWebsites: (callback) => {
    getWebsites: () => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM website', (error, results) => {
                if (error) {
                    reject(error);
                }
                // callback(results.rows);
                return resolve(results.rows);
            })

        })
    },
    getWebsiteAsync: async () => {
        // const result = await pool.query('SELECT * FROM website');
        pool.query('SELECT * FROM website', (error, results) => {
            if (error) {
                throw error;
            }
            return results.rows;
        })
        // return result.rows;
    },
    getWebsitePromise: () => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM website', (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results.rows);
            })
        })
    },
    getWebsite: (id, callback) => {
        pool.query('SELECT * FROM website WHERE ID = $1', [id], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results.rows)
        })
    },

};


module.exports = database;



