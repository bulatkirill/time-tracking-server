export const sendHttpOk = (res, resultLabel, result) => {
    //TODO, think about correct way of writing the result
    // const response = {};
    // response[resultLabel] = result;
    res.status(200).send(result);
};
