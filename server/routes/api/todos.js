const express = require('express');
const router = express.Router();
const config = require('config');
const request = require('request');
const { check } = require('express-validator/check');

// IMPORT MODELS
const Todos = require('../../models/Todo')

// @route Get api/todos
// @desc Test Routes
// @access Private


router.post('/' ,
	[
		[
			check('text', 'text is required').not().isEmpty(),
		]
	], 
	async (req,res) => {

	try{

		const newTodo = new Post({
			text: req.body.text,
		})

		const todo = await newPost.save();

		res.json(todo)
	}
	catch(err){
		console.error(err.message)
		res.status(500).send("Server Error")
	}
})

// @route Get api/todo/:id
// @desc Get Todo By Id
// @access Private


router.delete('/:id' , async (req,res) => {

	try{

		const todo = await Todos.findById(req.params.id);
		if(!post){
			return res.status(404).json({ msg: "Todo Not Found"})
		}
		await todo.remove()
		res.json({msg: "Todo Removed", id: req.params.id})
	}
	catch(err){
		console.error(err.message)
		if(err.kind === 'ObjectId'){
			res.status(404).json({ msg: "Todo Not Found"})
		}
		res.status(500).send("Server Error")
	}
})

// @route Get api/todos
// @desc Get All Todos
// @access Private
router.get('/' , async (req,res) => {

	try{

		const todos = await Todos.find().sort({date: -1})

		res.json(todos)
	}
	catch(err){
		console.error(err.message)
		res.status(500).send("Server Error")
	}
})
module.exports = router