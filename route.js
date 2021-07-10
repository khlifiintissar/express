const users=require('./db')
const express =require('express')
const router=express.Router()


router.get('/getall',(req,res)=>{
    res.send(users)
})
router.post('/adduser',(req,res)=>{
    res.send(users.concat(req.body))
    console.log(req.body)
})
router.delete('/delete/:id/',(req,res)=>{
    res.send(users.filter(el=>el.id!==parseInt(req.params.id)))
    console.log(req.params)
})
module.exports=router