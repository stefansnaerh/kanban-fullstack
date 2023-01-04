const asyncHandler = require('express-async-handler')

const Board = require('../models/boardModel')
const User = require('../models/userModel')



// Desc : get goals
// Route : GET /api/boards
// access : Private 
const getBoards = asyncHandler(async(req, res) => {
    const boards = await Board.find({ user: req.user.id})
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
    const board = await Board.create({
        title: req.body.title,
        user: req.user.id
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

    const user = await User.findById(req.user.id)
    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches board user
    if(board.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
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
    const user = await User.findById(req.user.id)
    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches board user
    if(board.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    await board.remove()
    res.status(200).json({id : req.params.id})
})

module.exports = {
    getBoards,
    setBoard,
    updateBoard,
    deleteBoard,  
}