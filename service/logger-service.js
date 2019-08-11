const ConsoleLogger = require('./logger/console-logger');

const logger = new ConsoleLogger();

module.exports = {
    log: (message) => {
        logger.log(message);
    }
};
