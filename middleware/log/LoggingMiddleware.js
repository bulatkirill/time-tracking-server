const logger = require('../../service/logger-service');

module.exports = (req, res, next) => {
    logger.log('Start of processing the HTTP request');
    logger.log(`REQ: method = ${req.method} for path = ${req.originalUrl}`);
    next();
};
