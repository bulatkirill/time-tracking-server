import express from 'express';
import realDb from '../db/queries'

const router = express.Router();

// router.get('/:id', (req, res) => {
//     console.log(`req for /website/${req.url} accepted`);
//     res.set(200).send({
//         success: true
//     });
//    here goes logic of accessing model and rendering the page, returning the api response
// });

router.get('/', async (req, res) => {
    console.log('req for /website accepted');
    const websites = realDb.getWebsites();
    websites.then((rows) => {
        res.status(200).send({
            success: true,
            message: 'websites data retrieved successfully',
            websites: rows
        })
    });
    // realDb.getWebsites((rows) => {
    //     const result = {
    //         success: true,
    //         message: 'websites data retrieved successfully',
    //         websites: rows
    //     };
    //     res.status(200).send(result);
    // });


//    here goes logic of accessing model and rendering the page, returning the api response
});

router.get('/async', async (req, res) => {
    console.log('req for /website accepted');
    const websites = await realDb.getWebsiteAsync();
    res.status(200).send({
        success: true,
        message: 'websites data retrieved successfully',
        websites: websites
    });
});

router.get('/promise', async (req, res) => {
    console.log('req for /website/promise accepted');
    const websites = await realDb.getWebsitePromise();
    res.status(200).send({
        success: true,
        message: 'websites data retrieved successfully',
        websites: websites
    });
});



module.exports = router;
