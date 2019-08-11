function Logger() {
}

Logger.prototype.process = function (message) {
    // default implementation does nothing
};

Logger.prototype.log = function (message) {
    this.process(message);
};

module.exports = Logger;
