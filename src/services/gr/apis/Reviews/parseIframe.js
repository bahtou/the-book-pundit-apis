const extractIframeSrc = _require('utils/extractIframeSrc');
const xmlParser = _require('utils/xmlParser');


async function parseIframe(ctx, next) {
  const { reqId, state } = ctx;
  const { bookId, reviewXML } = state;
  let parsedXMLresults = {};
  let reviewsCount = '';
  let reviewsWidget = '';
  let iframeSrc = '';

  logger.info({ reqId });

  parsedXMLresults = await xmlParser(reviewXML);
  reviewsCount = parsedXMLresults.GoodreadsResponse.book.work.text_reviews_count;
  reviewsWidget = parsedXMLresults.GoodreadsResponse.book.reviews_widget;

  if (reviewsCount === 0) {
    logger.info('--no reviews', { reqId, bookId });
    return ctx.body = [];
  }

  iframeSrc = await extractIframeSrc(reviewsWidget);

  ctx.state = { ...state, iframeSrc };
  logger.info({ reqId, iframeSrc });

  return next();
}

module.exports = parseIframe;
