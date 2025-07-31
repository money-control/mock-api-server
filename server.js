// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('./db.js'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom login mock
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = router.db.get('users').find({ username, password }).value();

  if (user) {
    res.json({ token: 'mock-token-abc123' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

server.get('/stock/returns/types', (req, res) => {
  return res.status(200).json(router.db.get('stockReturnTypes').value());
});

server.get('/stock/compare/config', (req, res) => {
  return res.status(200).json(router.db.get('stockCompareConfig').value());
});

server.get('/stock/compare/data', (req, res) => {
  const { scIds, duration } = req.query;

  // Collect missing params
  const missingParams = [];
  if (!scIds) missingParams.push('scIds');
  if (!duration) missingParams.push('duration');

  // If any param is missing, return 400 with error message
  if (missingParams.length > 0) {
    return res.status(400).json({
      error: `Missing required query parameter(s): ${missingParams.join(', ')}`
    });
  }

  // Success — return the full dataset (or filter based on params if needed)
  const data = router.db.get('stockCompareData').value();
  return res.status(200).json(data);
});

server.get('/stock/returns/sip', (req, res) => {
  const { mode } = req.query;
  let data;
  switch (mode) {
    case 'amount':
      data = router.db.get('stockSIPReturn').value();
      break;
    case 'quantity':
      data = router.db.get('stockSIPReturn').value();
      break;
    default:
      return res.status(400).json({ error: 'Invalid mode param' });
  }
  return res.status(200).json(data);
});

server.get('/stock/returns', (req, res) => {
  const { type } = req.query;

  let data;

  switch (type) {
    case 'absolute':
      data = router.db.get('stockReturnAbsolute').value();
      break;
    case 'annualised':
      data = router.db.get('stockReturnAnnualised').value();
      break;
    case 'best-quarter':
      data = router.db.get('stockReturnBestQuarter').value();
      break;
    case 'worst-quarter':
      data = router.db.get('stockReturnWorstQuarter').value();
      break;
    case 'rolling':
      data = router.db.get('stockReturnRolling').value();
      break;
    default:
      return res.status(400).json({ error: 'Invalid type param' });
  }

  return res.status(200).json(data);
});

server.get('/pro-stock-list/config', (req, res) => {
  return res.status(200).json(router.db.get('proStockListConfig').value());
});

server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}`);
});
