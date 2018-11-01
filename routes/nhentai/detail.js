const axios = require('axios');
const { resolve } = require('url');
const cheerio = require('cheerio');


module.exports = async (ctx) => {
    const { id } = ctx.params;
    // console.log(id);
    
    const url = `https://nhentai.net/g/${id}/`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // thumb to high-quality
    let galleryThumbs = $('.gallerythumb img')
        .map((_, ele) => resolve('https://nhentai.net', $(ele).attr('data-src')))
        .get();
    galleryThumbs = galleryThumbs.map((src) => src.replace(/(.+)(\d+)t\.(.+)/, (_, p1, p2, p3) => `${p1}${p2}.${p3}`));
    galleryThumbs = galleryThumbs.map((src) => src.replace('t.nhentai.net', 'i.nhentai.net'));

    // console.log(galleryThumbs);
    ctx.body = galleryThumbs;
};
