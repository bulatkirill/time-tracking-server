import express from 'express';
import realDb from '../db/queries'

const router = express.Router();

// router.get('/:id', async (req, res) => {
//     let id = req.params.id;
//     console.log(`req for /website/${id} accepted`);
//     const website = await realDb.getWebsite(id);
//     res.set(200).send({
//         success: true,
//         message: 'website data retrieved successfully',
//         websites: website
//     });
//     // here goes logic of accessing model and rendering the page, returning the api response
// });

router.get('/', async (req, res) => {
    console.log('req for /website accepted');
    const websites = await realDb.getWebsites();
    res.status(200).send({
        success: true,
        message: 'websites data retrieved successfully',
        websites: websites
    });
});

router.get('/test', async (req, res) => {
    console.log('req for /test accepted');
    const value = promiseFunc(5).then((newValue) => {
        console.log('Im in first "onFulfilled" function.');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(newValue + 5);
            }, 2000);
            if (10 !== newValue) {
                reject(newValue - 4);
            }
        }).then((newValue2) => {
            console.log('Im in second "onFulfilled" function.');
            console.log(newValue2);
            res.status(200).send({
                success: true,
                message: 'websites data retrieved successfully',
            });
        })
    }).catch((errorValue) => {
        console.log(errorValue);
    });
});


function promiseFunc(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 5);
        }, 2000);
        if (5 !== value) {
            reject(value - 4);
        }
    })
}

module.exports = router;
