export const asyncWrapper = (fn) => {
    return (req, res, next) => {
        //fn could be called without next. But in case user require next in their route handler we provide it
        fn(req, res, next).catch((err) => {
            next(err);
        })
    }
};


