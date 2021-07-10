const express =require('express')
//const path=require('path')
const router=require('./route')
//const users=require('./db')
const prorouter=require('./route2')





//initialisation
const app=express()
//middlware express
app.use(express.json())



app.use('/users',router)
app.use('/products',prorouter)
/*
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'components','home.html'))
    /*res.sendFile(path.join(__dirname,'components','contact.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'components','contact.html'))
})
//express static _ middleware

app.use(express.static('components'))

// data base 
/*const users=[{
    name:'wajih',
    age:'25',
    id:1
},{
    name:'nermine',
    age:'28',
    id:2
},{
    name:'wafa',
    age:'30',
    id:3
}]
app.get('/users',(req,res)=>{
    res.send(users)
})*/


// creation serveur 
app.listen(5000,(err)=>{
    err?console.log(err):console.log('server is running')
})