const { getBookReviewResponse } = require('./mocks');
const superagent = require('superagent');
const { gr } = _require('config');

async function getBookReviews({ reqId, bookId }) {
  const url = `${gr.url}/book/show/${bookId}.xml`;
  const query = {
    key: gr.key,
    text_only: true
  };
  let startTime;
  let totalTime;
  let response = {};

  logger.info({ reqId, url, query });
  startTime = new Date().getTime();
  try {
    // response.text = await getBookReviewResponse();
    response = await superagent
      .get(url)
      .set('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:65.0) Gecko/20100101 Firefox/65.0')
      .buffer().type('xml').query(query);
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


module.exports = getBookReviews;
