import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://time_tracker:time_tracker@localhost:5432/time_tracker', {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// Create an export object with entry point to all tables
const models = {
    TimeEntry: sequelize.import('./time-entry')
};


// to resolve associations between entities
Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

// Add initialized sequelize object to export object so it can be used in other modules
models.sequelize = sequelize;
models.Sequelize = Sequelize;


module.exports = models;
