const dotenv = require("dotenv");

const express = require('express');
const app = express();
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(express.json());

// const User = require('./model/userSchema');
const PORT = process.env.PORT;
app.use(require('./router/auth'));

// middleware
const middleware = (req, res, next) => {
    console.log(`hello my middleware`);
    next();
}
app.get('/', (req, res) => {
    res.send(`hello world`);
})





app.get('/', (req, res) => {
    res.send(`hello world`);

})

app.get('/contact', (req, res) => {
    res.send(`hello contact  world`);

}) 
 
app.get('/about',middleware, (req, res) => {
    res.send(`hello about world`);

})

// app.get('/SignUp', (req, res) => {
//     res.send(`hello Sign Up  world`);

// })

// app.get('/Login', (req, res) => {
//     res.send(`hello Login world`);

// })
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})
