import express from 'express';

const expressService = require('../service/express-service');
const timeEntryService = require('../service/time-entry-service');
const httpService = require('../service/http-service');
const router = express.Router();

router.get('/:id', expressService.asyncWrapper(async (req, res) => {
    let id = req.params.id;
    const timeEntry = await timeEntryService.getById(id);
    httpService.sendHttpOk(res, 'timeEntry', timeEntry);
}));

router.get('/', expressService.asyncWrapper(async (req, res) => {
    const timeEntries = await timeEntryService.getAll();
    httpService.sendHttpOk(res, 'timeEntries', timeEntries);
}));

router.post('/', expressService.asyncWrapper(async (req, res) => {
    const timeEntryAdded = await timeEntryService.add(req.body);
    httpService.sendHttpOk(res, 'timeEntry', timeEntryAdded);
}));

router.put('/:id', expressService.asyncWrapper(async (req, res) => {
    const id = req.params.id;
    const timeEntryUpdated = await timeEntryService.update(req.body, id);
    httpService.sendHttpOk(res, 'timeEntry', timeEntryUpdated);
}));

module.exports = router;
