const wait = time => new Promise(
    res => setTimeout(() => res(), time)
);

wait(200)
// onFulfilled() can return a new promise, `x`
    .then(() => new Promise(resolve => resolve('foo')))
    // the next promise will assume the state of `x`
    .then(a => a)
    // Above we returned the unwrapped value of `x`
    // so `.then()` above returns a fulfilled promise
    // with that value:
    .then(b => console.log(b)) // 'foo'
    // Note that `null` is a valid promise value:
    .then(() => null)
    .then(c => console.log(c)) // null
    // The following error is not reported yet:
    .then(() => {throw new Error('foo');})
    // Instead, the returned promise is rejected
    // with the error as the reason:
    .then(
        // Nothing is logged here due to the error above:
        d => console.log(`d: ${ d }`),
        // Now we handle the error (rejection reason)
        e => console.log(e)) // [Error: foo]
    // With the previous exception handled, we can continue:
    .then(f => console.log(`f: ${ f }`)) // f: undefined
    // The following doesn't log. e was already handled,
    // so this handler doesn't get called:
    .catch(e => console.log(e))
    .then(() => { throw new Error('bar'); })
    // When a promise is rejected, success handlers get skipped.
    // Nothing logs here because of the 'bar' exception:
    .then(g => console.log(`g: ${ g }`))
    .catch(h => console.log(h)) // [Error: bar]
;


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

