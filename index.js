// process.env.NODE_ENV="test"

const Koa = require('koa');
const router = require('./router');
const mount = require('koa-mount');
const app = module.exports = new Koa();

// app.use(async function (ctx) {
//     ctx.body = 'Hello World';
// });

// router
app.use(mount('/', router.routes())).use(router.allowedMethods());


if (!module.parent) app.listen(3000);
