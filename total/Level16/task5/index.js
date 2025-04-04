const express = require('express');
const app = express();
const port = 3000;


app.get('/search', (req, res) => {
  const query = req.query.q || 'No search term provided';
  const limit = req.query.limit ? parseInt(req.query.limit) : 5; 

  res.send(`${query}, Limit: ${limit}`);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
