const express = require('express')
const router = express.Router()
const {getBoards, setBoard, updateBoard, deleteBoard, setTask, setSubTask} = require('../controllers/boardController')

getBoards,
setBoard,
updateBoard,
deleteBoard,
setTask


router.route('/').get(getBoards).post(setBoard)

router.route('/:id').delete(deleteBoard).put(updateBoard)

router.post('/:boardId', setTask)
router.post('/:boardId/tasks/:taskId', setSubTask)


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