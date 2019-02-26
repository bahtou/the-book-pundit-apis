async function validateBookId(param, ctx, next) {
  const { reqId, state } = ctx;

  logger.info({ reqId, bookId: param, state });

  ctx.state = { ...state, bookId: param };
  logger.info({ reqId, ...ctx.state });

  return next();
}


module.exports = {
  validateBookId
};
