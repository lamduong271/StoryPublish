const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req,res) => {
    res.send('It work');
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server run on port ${port}`)
})