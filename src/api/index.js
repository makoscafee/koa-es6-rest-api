import { version } from '../../package.json';
import Router from 'koa-router';

const route = new Router({ prefix: '/api/v1' });
route.get('/', (ctx, next) => {
  ctx.body = `v${version}`;
});
export default route;
