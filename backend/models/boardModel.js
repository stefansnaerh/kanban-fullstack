

const mongoose = require('mongoose')
const TaskSchema = require('./taskModel').schema
const UserSchema = require('./userModel').schema


const BoardSchema = mongoose.Schema(
    {
        user: {
           type: mongoose.Schema.Types.ObjectId,
           required: true,
           ref: 'User' 
        },
    title : {
        type : String,
        required: true
    },
    tasks: [TaskSchema]
}, {
    timestamps : true,
    }
) 



module.exports = mongoose.model('Board', BoardSchema)