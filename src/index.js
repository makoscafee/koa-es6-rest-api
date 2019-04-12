import Koa from 'koa';
import cors from '@koa/cors';
import logger from 'koa-logger';

// Start an app
const app = new Koa();
app.use(logger());
app.use(cors());

app.use((ctx, next) => {
  return next();
});

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
