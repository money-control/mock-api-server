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
const unlistedConsumption = require('./data/unlisted-shares/landing.json');
const unlistedOverview = require('./data/unlisted-shares/overview/overview.json');
const unlistedOverviewDetails = require('./data/unlisted-shares/overview/details.json');
const unlistedOverviewPartner = require('./data/unlisted-shares/overview/partner.json');
const unlistedOverviewPrice = require('./data/unlisted-shares/overview/price.json');
const unlistedOverviewReturn= require('./data/unlisted-shares/overview/return.json');
const unlistedOverviewKeyStats= require('./data/unlisted-shares/overview/keystatistics.json');
const unlistedOverviewFinOverview= require('./data/unlisted-shares/overview/financeoverview.json');
const unlistedInfoMgmt= require('./data/unlisted-shares/info-management/info.json');
const unlistedShareHolding= require('./data/unlisted-shares/share-holding/share-holding.json');
const unlistedShareHoldingTop= require('./data/unlisted-shares/share-holding/share-top-holding.json');
const unlistedCorporateAction= require('./data/unlisted-shares/corporate-action/corporateaction.json');
const unlistedCorporateActionBonus= require('./data/unlisted-shares/corporate-action/bonus.json');
const unlistedCorporateActionDividend= require('./data/unlisted-shares/corporate-action/dividend.json');
const unlistedCorporateActionReturn= require('./data/unlisted-shares/corporate-action/return.json');
const unlistedCorporateActionSplit= require('./data/unlisted-shares/corporate-action/splits.json');
const forecastAddBVPS = require('./data/forecast-bvps/config.json');
const stockAnalysisAddBVPS = require('./data/stock-analysis-bvps/config.json');

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
  homeProStockListConfig,
  unlistedConsumption,
  unlistedOverview,
  unlistedOverviewDetails,
  unlistedOverviewPartner,
  unlistedOverviewPrice,
  unlistedOverviewReturn,
  unlistedOverviewKeyStats,
  unlistedOverviewFinOverview,
  unlistedInfoMgmt,
  unlistedShareHolding,
  unlistedShareHoldingTop,
  unlistedCorporateAction,
  unlistedCorporateActionBonus,
  unlistedCorporateActionDividend,
  unlistedCorporateActionReturn,
  unlistedCorporateActionSplit,
  forecastAddBVPS,
  stockAnalysisAddBVPS
};

