'use strict';
const router = require('express').Router();
const {TDlist} = require("../config/db");


// requests (C,R,U,D)
router.get("/getAll", (req, res, next) => {
    TDlist.find((err,tlists) => {
        if(err){
            next(err);
        }
        res.send(tlists);
    });
});


router.post("/create", (req, res, next) => {
    const item = new TDlist(req.body);
    item.save()
        .then((result) => console.log(result))
        .catch((err) => next(err));
        res.send('done');
});

router.delete("/delete/:id", (req, res, next) => {
    TDlist.findByIdAndDelete(req.params.id,(err) => {
    if(err){
        next(err);
    }
    res.status(204).send(`done`);
    })
});


router.patch("/update/:id", (req, res, next) => {
    TDlist.findByIdAndUpdate(req.params.id, req.body,{new: true},(err,result) => {
        if(err){
            next(err);
        }
        res.status(202).send('Updated!');
    })

});


module.exports = router; 