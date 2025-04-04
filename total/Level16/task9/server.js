const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});


app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;


  if (!name || !email || !message) {
    return res.status(400).send('Error: All fields are required.');
  }


  res.send(`
    <h1>Form Submitted Successfully!</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
