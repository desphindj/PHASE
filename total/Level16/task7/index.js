const express = require('express');
const app = express();
const port = 3000;


const requestLogger=(req,res,next) => {
  const timestamp=new Date().toISOString();
  console.log(`[${timestamp}] [${req.method}] [${req.url}]`);
  next(); 
};


app.use(requestLogger);


app.get('/',(req,res)=>{
  res.send('Welcome to the Home Page!');
});

app.get('/about',(req, res)=>{
  res.send('This is the About Page.');
});

app.post('/submit',(req,res)=>{
  res.send('Form Submitted!');
});

app.get('/user/:id',(req,res)=>{
  res.send(`User ID: ${req.params.id}`);
});


app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`);
});
