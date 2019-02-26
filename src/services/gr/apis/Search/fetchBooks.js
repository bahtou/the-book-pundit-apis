// const { apiHandleError, InternalError } = require();
const grEndpoints = _require('services/gr/endpoints/gr');


async function fetchBooks(ctx, next) {
  const { reqId, state } = ctx;
  const { term } = state;

  logger.info('entry', { reqId, ...state });

  let responseXML;
  try {
    responseXML = await grEndpoints('SEARCH_BOOKS', { reqId, term });
  } catch (error) {
    console.log('something went wrong: fetchbooks');
    return 'oops';
    // return apiHandleError(ctx, InternalError);
  }

  ctx.state = { ...state, searchResults: responseXML };
  logger.info('exit', { reqId });

  return next();
}


module.exports = fetchBooks;
