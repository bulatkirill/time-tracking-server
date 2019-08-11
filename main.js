const bodyParser = require('body-parser');
const routes = require('./routes');
const express = require('express');
const faker = require("faker");
const times = require("lodash.times");
const log = require('./middleware/log/LoggingMiddleware');
const db = require('./db');
const errorHandlerMiddleware = require('./middleware/error-handler/error-handler-middleware');
const logger = require('./service/logger-service');
const app = express();

// specifying static content of the application
app.use(express.static('public'));

// body parsing middleware. It is used as interceptor before delivering request to routers
// later this is saved as req.body
// bodyParser.json() - tells to parse body of the request only if it is json
app.use(bodyParser.json());

// parse body if it is url-encoded
app.use(bodyParser.urlencoded({extended: true}));

// basic logging for all requests
app.use(log);

// require(<id>) - importing of module, JSON, and local files
app.use(routes);

app.use(errorHandlerMiddleware.errorHandlerMiddleware);
const PORT = 5000;

// loading/creating database schema defined in db module
db.sequelize.sync({
    force: true //drop table if exists before the start
}).then(() => {
    // populate author table with dummy data
    db.TimeEntry.bulkCreate(
        times(10, () => ({
            tabId: 1,
            host: faker.name.firstName(0)
        }))
    );
    app.listen(PORT, () =>
        logger.log(`App listening on port ${PORT}!`));

});
