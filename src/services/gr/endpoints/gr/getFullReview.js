const superagent = require('superagent');
const { gr } = _require('config');


async function getFullReview({ reqId, reviewURL }) {
  const url = reviewURL;
  let startTime;
  let totalTime;
  let response = {};

  logger.info({ reqId, url });
  startTime = new Date().getTime();
  try {
    response = await superagent
      .get(url)
      .set('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:65.0) Gecko/20100101 Firefox/65.0');
    totalTime = new Date().getTime() - startTime;
  } catch (err) {
    totalTime = new Date().getTime() - startTime;
    const { status, response:{ error, headers } } = err;
    logger.error({ reqId, status, headers, error });
    throw error;
  }

  const { status, headers, text } = response;
  logger.info('--success', { reqId, status, headers, totalTime });

  return text;
}


module.exports = getFullReview;
