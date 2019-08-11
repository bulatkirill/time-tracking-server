const Logger = require('./logger');

function ConsoleLogger() {

}

ConsoleLogger.prototype = new Logger();

ConsoleLogger.prototype.process = function (message) {
    console.log(message);
};

module.exports = ConsoleLogger;
