const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
//passport config
require('./config/passport')(passport);
//loasd routes
const auth = require('./routes/auth');

const app = express();

app.get('/', (req,res) => {
    res.send('It work');
})

//use Routes
app.use('/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server run on port ${port}`)
})