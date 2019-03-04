const cheerio = require('cheerio');


async function extractReviews(data) {
  const punditInfo = {};

  return new Promise((resolve, reject) => {
    const $ = cheerio.load(data, {
      withDomLvl1: true,
      normalizeWhitespace: true,
      xmlMode: true,
      decodeEntities: true
    });

    const reviewerRegEx = /\s*Reviews/gi;
    punditInfo.reviewer = $('h1 a').text().replace(reviewerRegEx, '');
    punditInfo.rating = $('.rating span').attr('title');

    $('a').attr('href', '#').css({ 'text-decoration': 'none', 'color': 'black', 'cursor': 'unset' });
    $('img').remove();
    $('.reviewer').remove();
    $('.leftAlignedImage').remove();
    $('#review-like').remove();
    $('#review-follow').remove();

    punditInfo.review = $('.big450BoxContent').html().trim();
    resolve(punditInfo);
  });
}


module.exports = extractReviews;
