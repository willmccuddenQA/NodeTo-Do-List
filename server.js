'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const createError = require('http-errors')

const app = express(); 
app.use(cors());
app.use(bodyParser.json());

const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

app.use(logger);

const productRoute = require('./routes/tdlist');

app.use("/task",productRoute);
app.use("/tdlist",productRoute);

app.use((req,res,next) => {
    next(createError(404, "Resource Not Found"));
})

app.use((err,req,res,next) => {
    res.status(err.statusCode || 500).send(err.message || "Error");
})

const server = app.listen(5020, () => {
    console.log(`Server started on: ${server.address().port}`);
});