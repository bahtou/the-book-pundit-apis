async function returnBooks(ctx, next) {
  const { reqId, state } = ctx;
  const { bookReturns } = state;

  logger.info('entry', { reqId, numOfBooks: bookReturns.length });

  return ctx.body = bookReturns;
}

module.exports = returnBooks;
