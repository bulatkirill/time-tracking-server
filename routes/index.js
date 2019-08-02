import express from 'express';

let router = express.Router();

router.use('/website', require('../controllers/websites'));

module.exports = router;
