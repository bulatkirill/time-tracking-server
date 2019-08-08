import express from 'express';

let router = express.Router();

/**
 * Basic temporary logging middleware for /timeEntry routes
 * @param req request
 * @param res response
 * @param next actual handler method call
 */
const timeEntryMiddleware = (req, res, next) => {
    console.log(`REQ: method = ${req.method} for path = ${req.originalUrl}`);
    next();
};

router.use('/timeEntry', timeEntryMiddleware, require('../controllers/time-entries-controller'));
router.use('/tmp', require('../controllers/tmp-controller'));

module.exports = router;
