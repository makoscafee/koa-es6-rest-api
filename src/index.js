import Koa from 'koa';
import cors from '@koa/cors';
import logger from 'koa-logger';
import apiRouter from './api';

// Start an app
const app = new Koa();
app.use(logger());
app.use(cors());

app.use(apiRouter.routes(), apiRouter.allowedMethods());

app.listen(3000);
