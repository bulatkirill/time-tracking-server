import express from 'express';
import db from '../db/db';

const router = express.Router();

router.get('/:id', (req, res) => {
    console.log(`req for /websites/${req.url} accepted`);
    res.set(200).send({
        success: true
    });
//    here goes logic of accessing model and rendering the page, returning the api response
});

router.get('/', (req, res) => {
    console.log('req for /websites accepted');
    res.status(200).send({
        success: true,
        message: 'websites data retrieved successfully',
        websites: db
    })
//    here goes logic of accessing model and rendering the page, returning the api response
});

module.exports = router;
