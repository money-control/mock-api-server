// db.js

const users = require('./data/users.json'); //example
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
const proStockListConfig = require('./data/pro-stock-list/config.json');
const homeProStockListConfig = require('./data/home/pro-stock-list/config.json');

module.exports = {
  users,
  stockReturnTypes,
  stockReturnAbsolute,
  stockReturnAnnualised,
  stockReturnBestQuarter,
  stockReturnWorstQuarter,
  stockReturnRolling,
  stockSIPReturn,
  stockCompareConfig,
  stockCompareData,
  homeTrendingData,
  proStockListConfig,
  homeProStockListConfig
};

