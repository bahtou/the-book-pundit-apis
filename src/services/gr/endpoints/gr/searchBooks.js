const { getSearchBooksResponse } = require('./mocks');
const superagent = require('superagent');
const { gr } = _require('config');


async function searchBooks({ reqId, term }) {
  const url = `${gr.url}/search/index.xml`;
  const query = {
    key: gr.key,
    q: term
  };
  let startTime;
  let totalTime;
  let response = {};

  logger.info({ reqId, url, query });
  startTime = new Date().getTime();
  try {
    // response.text = await getSearchBooksResponse();
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


module.exports = searchBooks;
