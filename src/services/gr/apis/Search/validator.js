async function validateSearchTerm(ctx, next) {
  const { reqId, state, query:{ q }} = ctx;

  logger.info({ reqId, term: q, state });

  ctx.state = { ...state, term: q };
  logger.info({ reqId, ...ctx.state });

  return next();
}


module.exports = {
  validateSearchTerm
};
