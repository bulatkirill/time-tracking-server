import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    res.set(200).send();
});

module.exports = router;
