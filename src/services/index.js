const { serviceAPI } = _require('config');
const apiRoute = require(`./${serviceAPI}/router`);


module.exports = app => apiRoute(app);
