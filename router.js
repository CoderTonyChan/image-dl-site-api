const Router = require('koa-router');
const router = new Router();


router.get('/mzitu/post/:id', require('./routes/mzitu/post'));

router.get('/nhentai/detail/:id', require('./routes/nhentai/detail'));

module.exports = router;
