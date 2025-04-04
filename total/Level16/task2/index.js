const express=require('express');
const app=express();
const PORT=3000;

app.get('/about',(req,res)=>{
    res.json('hello world its about pageeeee');
});

app.get('/contact',(req,res)=>{
    res.json('it is the contact page');
});

app.get('/services',(req,res)=>{
    res.json('service pagee')
});

app.listen(PORT,()=>{
    console.log(`server is loading in http://localhost:${PORT}`)
})