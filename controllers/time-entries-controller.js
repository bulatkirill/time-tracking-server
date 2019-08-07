import express from 'express';
import timeEntryRepository from '../db/time-entry-repository'

const router = express.Router();

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    console.log(`req for /timeEntry/${id} accepted`);
    const timeEntry = await timeEntryRepository.getTimeEntryById(id);
    res.set(200).send({
        success: true,
        message: 'time entry data retrieved successfully',
        timeEntry: timeEntry
    });
});

router.get('/', async (req, res) => {
    console.log('req for /timeEntry accepted');
    const timeEntries = await timeEntryRepository.getTimeEntries();
    res.status(200).send({
        success: true,
        message: 'timeEntries data retrieved successfully',
        timeEntries: timeEntries
    });
});

router.post('/', async (req, res) => {
    console.log('POST req for /timeEntry accepted');
    const timeEntries = await timeEntryRepository.getTimeEntries();
    res.status(200).send({
        success: true,
        message: 'timeEntries data retrieved successfully',
        timeEntries: timeEntries
    });
});

module.exports = router;
