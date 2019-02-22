const uuidv4 = require('uuid/v4');


async function assignRequestId(ctx, next) {
  ctx.state.reqId = uuidv4();
  ctx.state.reqStartTime = Date.now();

  return next();
}


module.exports = assignRequestId;
