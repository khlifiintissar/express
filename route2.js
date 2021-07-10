const products=require('./db2')
const express =require('express')
const prorouter=express.Router()


prorouter.get('/getall',(req,res)=>{
    res.send(products)
})

module.exports=prorouter