const htmlparser = require('htmlparser2');
const cheerio = require('cheerio')


async function extractReviews(data) {
  const punditInfo = {};

  return new Promise((resolve, reject) => {
    const $ = cheerio.load(data, {
      withDomLvl1: true,
      normalizeWhitespace: true,
      xmlMode: true,
      decodeEntities: true
    });

    punditInfo.by = $('h1 a').text();
    punditInfo.rating = $('.rating span').attr('title');

    $('a').attr('href', '#'); // need to style { text-decoration: none; color: black; cursor: unset; }
    $('.leftAlignedImage').remove();
    $('#review-like').remove();
    $('#review-follow').remove();

    punditInfo.review = $('.big450BoxContent').html().trim();
    resolve(punditInfo);
  });
}


module.exports = extractReviews;
