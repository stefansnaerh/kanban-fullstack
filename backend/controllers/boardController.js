const asyncHandler = require('express-async-handler')

const Board = require('../models/boardModel')
const Task = require('../models/taskModel')
const SubTask = require('../models/subTaskModel')
const { findById } = require('../models/subTaskModel')
const { isObjectIdOrHexString } = require('mongoose')

// Desc : set task
// Route : set /api/boards/:boardsId/tasks
// access : private

const setSubTask = asyncHandler(async(req, res) => {

    const boardId = req.params.boardId
    const thisBoard = Board.findById(boardId)
    const taskId = req.params.taskId

    
    Board.findOne({_id : req.params.boardId}, function(err, result){
        const newSubtask = new SubTask({
            name : req.body.name,
            done : false
        })
        const getTask = result
        const getSubTasks = getTask.tasks.filter(task => task._id == taskId)
        getSubTasks[0].subtasks.push(newSubtask)
        console.log(getSubTasks[0].subtasks)
        getTask.save(function(err, advResult){
            console.log("success")
            console.log(advResult)
            res.json(advResult)
        });
    });
    })
    

    

const setTask = asyncHandler(async(req, res) => {
    
    if(!req.body.name){
        res.status(400)
        throw new Error('please add task name')
    }
    Board.findOne({_id: req.params.boardId}, function(err, result){
        const task =  new Task({
            name : req.body.name,
            description: req.body.description
        })
        const destination = result
        console.log(destination.tasks)
        destination.tasks.push(task)
        console.log(destination)
        destination.save(function(err, advResult){
            console.log("success")
            res.json(advResult)
        })
    })
  
})


// Desc : get goals
// Route : GET /api/boards
// access : Private 
const getBoards = asyncHandler(async(req, res) => {
    const boards = await Board.find()
    res.status(200).json(boards)
})

// Desc : set board
// Route : POST /api/boards
// access : Private 
const setBoard = asyncHandler(async(req, res) => {
    if(!req.body.title){ // error if there is no title
       res.status(400)
       throw new Error('Please add a title')
    }
    // need to figure this out - this is supposed to be in setTask function
  
    const board = await Board.create({
        title: req.body.title
    })

    res.status(200).json(board)
})

// Desc : update board
// Route : PUT /api/boards:id
// access Private 
const updateBoard = asyncHandler(async(req, res) => {
    const board = await Board.findById(req.params.id)

    if(!board) { // if there is no board with this id : throw error
        res.status(400)
        throw new Error('Board not found')
    }
    const updatedBoard = await Board.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updateBoard)
})

// Desc : delete board
// Route : DELETE /api/boards:id
// access Private 
const deleteBoard = asyncHandler(async(req, res) => {
    
    const board = await Board.findById(req.params.id)
    
    if(!board){
        res.status(400)
        throw new Error('Board not found')
    }
    /*
    const deletedBoard = await Board.findByIdAndDelete(req.params.id)

    res.status(200).json(deletedBoard)*/
    await board.remove()
    res.status(200).json({id : req.params.id})
})

module.exports = {
    getBoards,
    setBoard,
    updateBoard,
    deleteBoard,
    setTask,
    setSubTask
}