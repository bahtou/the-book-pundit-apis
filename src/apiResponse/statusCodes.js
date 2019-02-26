/*
 * Status Codes enum
 */
/* eslint-disable no-multi-spaces */

module.exports.SUCCESS                                   = 2000;

module.exports.BAD_REQUEST                               = 4000;
module.exports.INVALID_PARAMETER                         = 4001;
module.exports.INVALID_QUERY_PARAMETER                   = 4002;
module.exports.MALFORMED_PARAMETER                       = 4003;
module.exports.MISSING_PARAMETER                         = 4004;

module.exports.UNAUTHORIZED                              = 4010;
module.exports.FORBIDDEN                                 = 4030;
module.exports.NOT_FOUND                                 = 4040;
module.exports.METHOD_NOT_ALLOWED                        = 4050;
module.exports.NOT_ACCEPTABLE                            = 4060;

module.exports.UNSUPPORTED_MEDIA_TYPE                    = 4150;
module.exports.UNSUPPORTED_FILE_TYPE                     = 4151;

module.exports.UNPROCESSABLE_ENTITY                      = 4220;
module.exports.FILE_UNPROCESSABLE                        = 4221;

module.exports.TOO_MANY_REQUESTS                         = 4290;

module.exports.PRECONDITION_REQUIRED                     = 4280;
module.exports.MISSING_HEADER_FIELD                      = 4281;

module.exports.INTERNAL_ERROR                            = 5000;
module.exports.UNKNOWN_ERROR                             = 5001;
