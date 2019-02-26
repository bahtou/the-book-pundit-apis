async function handleError(ctx, errObj, msg='', data={}) {
  let { errCode=5000, status=500, message='Internal Error' } = errObj;
  const msgType = Object.prototype.toString.call(msg);
  const dataType = Object.prototype.toString.call(data);
  let headers = {};

  if (msgType !== '[object String]' && msgType === '[object Object]') {
    data = msg;
    msg = '';
  }

  //dev check
  if (msgType !== '[object String]' && msgType !== '[object Object]') {
    throw new Error(`invalid msg type: expected String or Object but got ${msgType}`);
  }

  if (dataType !== '[object Object]') {
    data = { results: data };
  }

  const body = {
    message: msg || message,
    ...data,
    error: {
      code: errCode
    }
  };

  ctx.state.response = {
    status,
    headers,
    body
  };

  throw new Error('API Reponse Error');
}


module.exports = handleError;
