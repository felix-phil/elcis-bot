import express from 'express';
import 'express-async-errors';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

import { stratARouter } from './routes/webhooks/strat-a';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(stratARouter);

app.use('*', async (req, res, next) => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
