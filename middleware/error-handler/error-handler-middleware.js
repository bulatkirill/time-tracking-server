const loggerService = require('../../service/logger-service');

module.exports = {
    errorHandlerMiddleware: (err, req, res, next) => {
        loggerService.log(`Processing the error for REQ: method = ${req.method} for path = ${req.originalUrl}`);
        loggerService.log(err);
        if (res.headersSent) {
            return next(err);
        }
        res.status(500).send({
            success: false,
            error: err.message
        })
    }
};
