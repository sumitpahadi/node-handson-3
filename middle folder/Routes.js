const express=require('express')
const {midddle_one,midddle_two}=require('./middleware')

const expressroute=express.Router()

const {logout, register,login,age,college}=require('./Data')



expressroute.get('/user/login',midddle_one,login)
expressroute.get('/user/logout',midddle_one,logout)
expressroute.get('/user/register',midddle_one,register)
expressroute.get('/user/:age',midddle_two,age)
expressroute.get('/college',midddle_two,college)

module.exports=expressroute