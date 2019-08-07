import express from 'express';

const timeEntryService = require('../service/time-entry-service');
const router = express.Router();

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    console.log(`req for /timeEntry/${id} accepted`);
    const timeEntry = timeEntryService.getById(id);
    res.set(200).send({
        success: true,
        message: 'time entry data retrieved successfully',
        timeEntry: timeEntry
    });
});

router.get('/', async (req, res) => {
    console.log('req for /timeEntry accepted');
    const timeEntries = await timeEntryService.getAll();
    res.status(200).send({
        success: true,
        message: 'timeEntries data retrieved successfully',
        timeEntries: timeEntries
    });
});

router.post('/', async (req, res) => {
    console.log('POST req for /timeEntry accepted');
    // think about using JSON.parse
    const timeEntry = {
        tabId: req.body.id,
        dateOpen: req.body.dateOpen,
        dateClosed: req.body.dateClosed,
        fullUrl: req.body.fullUrl
    };
    const timeEntryAdded = timeEntryService.add(timeEntry);
    res.status(200).send({
        success: true,
        message: 'timeEntries data retrieved successfully',
        timeEntry: timeEntryAdded
    });
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(`PUT req for /timeEntry/${id} accepted`);
    // think about using JSON.parse
    const timeEntry = {
        id: id,
        tabId: req.body.id,
        dateOpen: req.body.dateOpen,
        dateClosed: req.body.dateClosed,
        fullUrl: req.body.fullUrl
    };
    const timeEntryUpdated = timeEntryService.update(timeEntry);
    res.status(200).send({
        success: true,
        message: 'timeEntries data retrieved successfully',
        timeEntry: timeEntryUpdated
    });
});

module.exports = router;
