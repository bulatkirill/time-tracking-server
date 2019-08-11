import express from 'express';
let router = express.Router();

router.use('/timeEntry', require('../controllers/time-entries-controller'));
router.use('/tmp', require('../controllers/tmp-controller'));

module.exports = router;
