async function handleSuccess(ctx, { ...body }={}, { status=200, headers={} }={}) {
  const { state:{ reqId, reqBegin }} = ctx;
  const reqDuration = `${Date.now() - reqBegin}ms`;

  logger.info(`API--Response--SUCCESS`, { reqId, reqDuration, headers, ...body });

  ctx.set(headers);
  ctx.status = status;
  ctx.body = { reqId, ...body };
}


module.exports = handleSuccess;
