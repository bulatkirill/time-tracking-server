const LoggingMiddleware = require('./LoggingMiddleware');


function TimeEntryLoggingMiddleware() {
}

TimeEntryLoggingMiddleware.prototype = new LoggingMiddleware();

TimeEntryLoggingMiddleware.prototype.process = function (req, res) {
    // console.log('I\'m in overridden process function');
//    here goes specific logic, point of extension
};

module.exports = TimeEntryLoggingMiddleware;


