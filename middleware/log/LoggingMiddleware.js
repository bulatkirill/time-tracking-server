module.exports = (req, res, next) => {
    console.log('Start of processing the HTTP request');
    console.log(`REQ: method = ${req.method} for path = ${req.originalUrl}`);
    next();
};
