const extractIframeSrc = _require('utils/extractIframeSrc');
const xmlParser = _require('utils/xmlParser');


async function parseIframe(ctx, next) {
  const { reqId, state } = ctx;
  const { reviewXML } = state;
  let parsedXMLresults = {};
  let reviewsWidget = '';
  let iframeSrc = '';

  logger.info('entry', { reqId });

  parsedXMLresults = await xmlParser(reviewXML);
  reviewsWidget = parsedXMLresults.GoodreadsResponse.book.reviews_widget;

  iframeSrc = await extractIframeSrc(reviewsWidget);

  ctx.state = { ...state, iframeSrc };
  logger.info('src', { reqId, iframeSrc });

  return next();
}

module.exports = parseIframe;
