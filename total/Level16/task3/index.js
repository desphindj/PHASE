const express = require('express');
const app = express();
const PORT = 3000;


const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' }
];


app.get('/api/users', (req, res) => {
  res.json(users);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
