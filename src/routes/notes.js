const {Router} =require('express')
const {getNotes,createNote,updateNote,deleteNote,getNote}=require('../controllers/notes.controllers')
const router =Router()

router.route('/')
    .get(getNotes)
    .post(createNote)

router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote)

module.exports =router