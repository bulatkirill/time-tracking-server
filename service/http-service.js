module.exports = {
    sendHttpOk: (res, resultLabel, result) => {
        const response = {
            success: true
        };
        response[resultLabel] = result;
        res.status(200).send(response);

    }
};
