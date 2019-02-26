const apiHandleError = require('./handleError');
const apiHandleSuccess = require('./handleSuccess');
const errors = require('./errors');


//WIP
async function apiResponse(ctx) {
  const { reqId, resContext } = ctx.state;
  const { status, headers, body } = resContext;

  status > 299
    ? logger.warn(`ResponseERROR--`, { reqId, body, headers, status })
    : logger.info(`ResponseSUCCESS--`, { reqId, headers, status });

  if (headers) {
    ctx.set(headers);
  }

  ctx.status = status;
  ctx.body = { reqId, ...body };

  return;
}


module.exports = {
  apiHandleError,
  apiHandleSuccess,
  errors
};
