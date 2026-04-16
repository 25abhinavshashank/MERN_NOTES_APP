const express=require('express');
const { getNotes, getNote, deleteNote, updateNote, addNote } = require('../controllers/notesController');

const router=express.Router();

router.get("/",getNotes);
router.get('/:id',getNote);
router.delete('/:id',deleteNote);
router.patch('/:id',updateNote);
router.post('/',addNote);

module.exports=router;