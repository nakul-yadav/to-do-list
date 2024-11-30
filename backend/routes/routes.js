const express=require('express');
const router=express.Router();
const controller=require('../controller/control')


router.get('/',(req,res)=>{
    res.send('home');
})

module.exports= router



