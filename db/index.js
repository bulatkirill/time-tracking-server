const env = process.env.NODE_ENV || 'development';
const sequelizeConfig = require(__dirname + '/config/config.json')[env];
import Sequelize from 'sequelize';

sequelizeConfig.pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
};

const sequelize = new Sequelize(
    // 'postgres://time_tracker:time_tracker@localhost:5432/time_tracker',
    sequelizeConfig
);

// Create an export object with entry point to all tables
const models = {
    TimeEntry: sequelize.import('./time-entry'),
    Client: sequelize.import('./client')
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
