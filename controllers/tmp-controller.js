import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    console.log('TMP is accepted');
    res.set(200).send();
});

module.exports = router;
