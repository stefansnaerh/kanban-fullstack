const express = require('express')
const router = express.Router()
const {getBoards, setBoard, updateBoard, deleteBoard} = require('../controllers/boardController')

getBoards,
setBoard,
updateBoard,
deleteBoard

router.route('/').get(getBoards).post(setBoard)

router.route('/:id').delete(deleteBoard).put(updateBoard)

/*
 This is the same as the code above
router.get('/', getBoard)

// create
router.post('/', setBoard)

// update
router.put('/:id',updateBoard)

// delete
router.delete('/:id', deleteBoard)
*/
module.exports = router