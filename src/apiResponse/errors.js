const statusCodes = require('./statusCodes');


const Forbidden = {
  errCode: statusCodes.FORBIDDEN,
  message: 'Not Allowed',
  status: 403
};

const InternalError = {
  errCode: statusCodes.INTERNAL_ERROR,
  message: 'Internal Error',
  status: 500
};

const InvalidFileType = {
  errCode: statusCodes.UNSUPPORTED_FILE_TYPE,
  message: 'Unsupported file type',
  status: 415
};

const InvalidParameter = {
  errCode: statusCodes.INVALID_PARAMETER,
  message: 'Bad Request',
  status: 400
};

const InvalidQueryParameter = {
  errCode: statusCodes.INVALID_QUERY_PARAMETER,
  message: 'Bad Request',
  status: 400
};

const MissingHeaderField = {
  errCode: statusCodes.MISSING_HEADER_FIELD,
  message: 'Precondition Required',
  status: 428
};

const MissingParameter = {
  errCode: statusCodes.BAD_REQUEST,
  message: 'Bad Request',
  status: 400
};

const NotAcceptable = {
  errCode: statusCodes.NOT_ACCEPTABLE,
  message: 'Not Acceptable',
  status: 406
};

const NotFound = {
  errCode: statusCodes.NOT_FOUND,
  message: 'Not Found',
  status: 404
};

const ParserError = {
  errCode: statusCodes.FILE_UNPROCESSABLE,
  message: 'Bad Request',
  status: 422
};

const Unauthorized = {
  errCode: statusCodes.UNAUTHORIZED,
  message: 'Not authorized',
  status: 401
};

const Unknown = {
  errCode: statusCodes.UNKNOWN_ERROR,
  message: 'Unknown Error',
  status: 500
};

const Validation = {
  errCode: statusCodes.MISSING_PARAMETER,
  message: 'Bad Request',
  status: 400
};


module.exports = {
  Forbidden,
  InternalError,
  InvalidFileType,
  InvalidParameter,
  InvalidQueryParameter,
  MissingHeaderField,
  MissingParameter,
  NotAcceptable,
  NotFound,
  ParserError,
  Unauthorized,
  Unknown,
  Validation
};


/**
 * http://exploringjs.com/es6/ch_classes.html
 * https://coryrylan.com/blog/javascript-es6-class-syntax
 * https://gist.github.com/justmoon/15511f92e5216fa2624b
 * https://gist.github.com/slavafomin/b164e3e710a6fc9352c934b9073e7216
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

// function createErrorClass(errName='<ERROR-NAME>', {errCode=5000, message='', status=500}={}) {
//   return class extends Error {
//     constructor(msg='', data={}) {
//       super();
//       this.name = errName;
//       this.errCode = errCode;
//       this.status = status;

//       const msgType = Object.prototype.toString.call(msg);
//       const dataType = Object.prototype.toString.call(data);

//       if (msgType !== '[object String]' && msgType !== '[object Object]') {
//         throw new Error(`invalid msg type: expected String or Object but got ${msgType}`);
//       }

//       if (dataType !== '[object Object]') {
//         throw new Error(`invalid data type: ${data}-${dataType}`);
//       }

//       if (msgType === '[object Object]') {
//         this.data = msg;
//         this.message = message || '';
//       } else {
//         this.message = msg || message || '';
//         this.data = data;
//       }
//     }
//   }
// }
