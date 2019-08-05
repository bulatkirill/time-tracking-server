import express from 'express';

let router = express.Router();

router.use('/timeEntry', require('../controllers/time-entries-controller'));

module.exports = router;
