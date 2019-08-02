import express from 'express';
import bodyParser from "body-parser";
import routes from './routes';

const app = express();

// specifying static content of the application
app.use(express.static('public'));

// body parsing middleware. It is used as interceptor before delivering request to routers
// later this is saved as req.body
// bodyParser.json() - tells to parse body of the request only if it is json
app.use(bodyParser.json());

// parse body if it is url-encoded
app.use(bodyParser.urlencoded({extended: true}));

// require(<id>) - importing of module, JSON, and local files
app.use(routes);


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
