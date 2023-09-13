const express=require('express')
const app=express()
const expressroutes=require('./middle folder/Routes')
app.use('/middle',expressroutes)
const port=5000

app.listen(port,()=>{
    console.log('hey this is port number'+port)
})