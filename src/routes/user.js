const {Router} =require('express')

const {getUsers,deleteUser,createUser}=require('../controlers/users.controllers')

const router =Router()

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .delete(deleteUser)
 

module.exports =router