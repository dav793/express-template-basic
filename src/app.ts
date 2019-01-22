import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

const env = require('../config/environment');
const logger = require('./winston');

class App {

    // ref to Express instance
    public express: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.handleErrors();    // this needs to be the last function called
    }

    // Configure Express middleware.
    private middleware(): void {
        // third party middleware
        this.express.use(morgan('dev', { stream: logger.stream }));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));

        // application-level middleware
        // @todo: add middleware
    }

    // Configure API endpoints.
    private routes(): void {
        if (!env.CLIENT_PATH)
            console.warn("client path was not set!");

        this.express.use('/', express.static(env.CLIENT_PATH));

        // 404 response
        this.express.all('*', (req: any, res: any) => {
            console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
            res.sendStatus(404);
        });
    }

    private handleErrors(): void {
        this.express.use((err, req, res, next) => {     // express error handling
            logger.error(err.stack);

            if (res.headersSent)
                return next(err)    // delegate to default error-handler if response has already begun being sent

            if (process.env.NODE_ENV === 'production')
                res.status(500).send(err.message);
            else
                res.status(500).send(err.stack);
        });
    }

}

export default new App().express;
