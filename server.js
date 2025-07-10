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

server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}`);
});
