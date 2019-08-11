const logger = require('../../service/logger-service');

function LoggingMiddleware() {

}

LoggingMiddleware.prototype.process = function (req, res) {
//    has to be overridden by subclasses
};

LoggingMiddleware.prototype.execute = function (req, res, next) {
    logger.log('Start of processing the HTTP request');
    logger.log(`REQ: method = ${req.method} for path = ${req.originalUrl}`);
    this.process(req, res);
    next();
};

module.exports = LoggingMiddleware;
