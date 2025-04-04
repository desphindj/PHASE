const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.get('/', (req, res) => 
    {
  res.send('Welcome to the Home Page!');
});

app.get('/error', (req, res) => 
    {
  throw new Error('This is a manually thrown error.');
});

app.get('/not-found', (req, res) => 
    {
  
  const resource = null;
  if (!resource) {
    return res.status(404).send('Resource not found.');
  }
  res.send('Resource found.');
});


app.use((req, res, next) => 
    {
  res.status(404);
  if (req.accepts('html')) 
    {
    res.sendFile(__dirname + '/public/error.html');
  } 
  else if (req.accepts('json')) 
    {
    res.json({ error: 'Not Found' });
  } 
  else 
  {
    res.type('txt').send('Not Found');
  }
});


app.use((err, req, res, next) => {
  console.error(err.stack); 

  const isDev = app.get('env') === 'development';
  const errorResponse = {
    message: err.message,
    stack: isDev ? err.stack : undefined
  };

  if (req.accepts('html')) {
    res.status(500).sendFile(__dirname + '/public/error.html');
  } else if (req.accepts('json')) {
    res.status(500).json(errorResponse);
  } else {
    res.status(500).type('txt').send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
