const express = require('express')
const router = express.Router()
const {getBoards, setBoard, updateBoard, deleteBoard } = require('../controllers/boardController')
const { setTask, deleteTask, updateTask } = require('../controllers/taskController')
const { setSubTask, updateSubTask, deleteSubTask } = require('../controllers/subTaskController.js')

getBoards,
setBoard,
updateBoard,
deleteBoard,

setTask,
deleteTask,
updateTask,

setSubTask,
deleteSubTask


// routes for boards
router.route('/').get(getBoards).post(setBoard)
router.route('/:id').delete(deleteBoard).put(updateBoard)
// routes for tasks
router.post('/:boardId', setTask)
router.delete('/:boardId/tasks/:taskId', deleteTask)
router.put('/:boardId/tasks/:taskId', updateTask)
//routes for subTasks
router.post('/:boardId/tasks/:taskId', setSubTask)
router.put('/:boardId/tasks/:taskId/subtasks/:subtaskId', updateSubTask)
router.delete('/:boardId/tasks/:taskId/subtasks/:subtaskId', deleteSubTask)


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