const asyncHandler = require('express-async-handler')




// Desc : get goals
// Route : GET /api/boards
// access : Private 
const getBoards = asyncHandler(async(req, res) => {
    res.status(200).json({message : 'Get Boards'})
})

// Desc : set board
// Route : POST /api/boards
// access : Private 
const setBoard = asyncHandler(async(req, res) => {
    if(!req.body.text){
       res.status(400)
       throw new Error('Please add a text field')
    }
    res.status(200).json({message : 'Set board'})
})

// Desc : update board
// Route : PUT /api/boards:id
// access Private 
const updateBoard = asyncHandler(async(req, res) => {
    res.status(200).json({message : `Update board ${req.params.id}`})
})

// Desc : delete board
// Route : DELETE /api/boards:id
// access Private 
const deleteBoard = asyncHandler(async(req, res) => {
    res.status(200).json({message : `Delete board ${req.params.id}`})
})

module.exports = {
    getBoards,
    setBoard,
    updateBoard,
    deleteBoard
}