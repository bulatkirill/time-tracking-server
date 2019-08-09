function LoggingMiddleware() {

}

LoggingMiddleware.prototype.process = function (req, res) {
//    has to be overridden by subclasses
};

LoggingMiddleware.prototype.execute = function (req, res, next) {
    console.log('Start of processing the HTTP request');
    console.log(`REQ: method = ${req.method} for path = ${req.originalUrl}`);
    this.process(req, res);
    next();
};

module.exports = LoggingMiddleware;
