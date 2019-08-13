import express from 'express';
import clientRouter from '../controllers/client-controller';
import timeEntryRouter from '../controllers/time-entries-controller';
let router = express.Router();


router.use('/timeEntry', timeEntryRouter);
router.use('/client', clientRouter);

module.exports = router;
