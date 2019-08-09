import express from 'express';

const timeEntryService = require('../service/time-entry-service');
const router = express.Router();

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    const timeEntry = await timeEntryService.getById(id);
    res.set(200).send({
        success: true,
        message: 'time entry data retrieved successfully',
        timeEntry: timeEntry
    });
});

router.get('/', async (req, res) => {
    const timeEntries = await timeEntryService.getAll();
    res.status(200).send({
        success: true,
        message: 'timeEntries data retrieved successfully',
        timeEntries: timeEntries
    });
});

router.post('/', async (req, res) => {
    const timeEntryAdded = await timeEntryService.add(req.body);
    res.status(200).send({
        success: true,
        message: 'Time Entry added successfully',
        timeEntry: timeEntryAdded
    });
});

router.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    const timeEntryUpdated = await timeEntryService.update(req.body, id).catch((error) => {
        console.log(error);
        // throw error;
        // res.sendStatus(500);
        // next(error);
    });
    res.status(200).send({
        success: true,
        message: `Time entry with id = ${id} updated successfully`,
        timeEntry: timeEntryUpdated
    });
});

module.exports = router;
