import express from 'express';
import * as expressService from '../service/express-service';
import * as clientService from '../service/client-service';
import * as httpService from '../service/http-service';

const router = express.Router();


router.get('/:id', expressService.asyncWrapper(async (req, res) => {
    let id = req.params.id;
    const client = await clientService.getById(id);
    httpService.sendHttpOk(res, 'client', client);
}));

router.get('/', expressService.asyncWrapper(async (req, res) => {
    const clients = await clientService.getAll();
    httpService.sendHttpOk(res, 'clients', clients);
}));

router.post('/', expressService.asyncWrapper(async (req, res) => {
    const clientAdded = await clientService.add(req.body);
    httpService.sendHttpOk(res, 'client', clientAdded);
}));

router.patch('/:id', expressService.asyncWrapper(async (req, res) => {
    const id = req.params.id;
    const clientUpdated = await clientService.partialUpdate(req.body, id);
    httpService.sendHttpOk(res, 'client', clientUpdated);
}));

router.post('/:clientId/timeEntry', expressService.asyncWrapper(async (req, res) => {
    const clientId = req.params.clientId;
    const timeEntryAdded = await clientService.addTimeEntry(req.body, clientId);
    httpService.sendHttpOk(res, 'timeEntry', timeEntryAdded);
}));

router.get('/:clientId/timeEntry', expressService.asyncWrapper(async (req, res) => {
    const clientId = req.params.clientId;
    const client = await clientService.getById(clientId);
    httpService.sendHttpOk(res, 'timeEntries', client.timeEntries);
}));

export default router;
