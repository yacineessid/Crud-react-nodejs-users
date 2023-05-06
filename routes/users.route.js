const express= require('express')
const { GetUserByID, UpdateUser, DeleteUser, AddUser, FindAllUsers, FindSinglUser,  } = require('../public/controllers/user.controller')
const router =express.Router()

//api get all users
router.get('/users',FindAllUsers)

//api post
router.post('/users',AddUser)

// get user by id
router.get('/users/:id',FindSinglUser)

//api  put user
router.put('/users/:id',UpdateUser)

//api delete user
router.delete('/users/:id',DeleteUser)
module.exports=router