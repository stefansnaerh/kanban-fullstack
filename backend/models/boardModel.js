

const mongoose = require('mongoose')

const SubTaskSchema = mongoose.Schema ({
    name: String,
    done: Boolean
})

const TaskSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    Description : String,
    subtasks: {
        type: SubTaskSchema
    },
})

const BoardSchema = mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    tasks: {
        type: TaskSchema
    }
}, {
    timestamps : true,
    }
) 


module.exports = mongoose.model('Board', BoardSchema)