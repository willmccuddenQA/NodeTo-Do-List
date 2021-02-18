'use strict'

const mongoose = require('mongoose');
const{Schema,model} = mongoose;
const{DB_URL,DB_NAME} = require('../config/CONSTS.json');

const taskSchema = new Schema({
    description: String,
    completeBy : String,
    completeStatus : Boolean,
    listID : Number
});

const Task = model('Task', taskSchema);

const tdListSchema = new Schema({
    title: String,
});

const TDlist = model('TDlist',tdListSchema);

mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Connected`);
    }
});

module.exports = {"Task" : Task};
module.exports = {"To-Do List" : TDlist};




