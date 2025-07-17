// db.js
const funds = require('./data/funds.json');
const users = require('./data/users.json');
const orders = require('./data/orders.json');
const stockReturnTypes = require('./data/stock/returns/types.json');
const stockReturnAbsolute = require('./data/stock/returns/absolute.json');
const stockReturnAnnualised = require('./data/stock/returns/annualised.json');
const stockReturnBestQuarter = require('./data/stock/returns/best-quarter.json');
const stockReturnWorstQuarter = require('./data/stock/returns/worst-quarter.json');
const stockReturnRolling = require('./data/stock/returns/rolling.json');
const stockSIPReturn = require('./data/stock/returns/sip.json');
const stockCompareConfig = require('./data/stock/compare/config.json');
const stockCompareData = require('./data/stock/compare/data.json');
const homeTrendingData = require('./data/home/trending/data.json');

module.exports = {
  funds,
  users,
  orders,
  stockReturnTypes,
  stockReturnAbsolute,
  stockReturnAnnualised,
  stockReturnBestQuarter,
  stockReturnWorstQuarter,
  stockReturnRolling,
  stockSIPReturn,
  stockCompareConfig,
  stockCompareData,
  homeTrendingData
};

