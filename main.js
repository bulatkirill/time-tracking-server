import express from 'express';
import db from './db/db';

const app = express();

app.get('/websites', (req, res) => {
    console.log('req for /websites accepted');
    res.status(200).send({
        success: true,
        message: 'websites data retrieved successfully',
        websites: db
    })
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
