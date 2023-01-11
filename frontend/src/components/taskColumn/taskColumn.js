
import './taskColumn.scss'
import { useRef, useEffect, useState } from "react";
import ColumnHeader from '../columnHeader/columnHeader';

const TaskColumn = ( {boardData, taskStatus} ) => {
    console.log(boardData)
    const testing = useRef(null)
    const [countTasks, setCountTasks] = useState(0)
    
    
    useEffect(() => {
        // get number of tasks under each column
        const list = testing.current.children
        setCountTasks(list.length)
    }, [])
    
    return (
        <>
        <ColumnHeader
        taskStatus={taskStatus}
        countTasks={countTasks}
        />
        <div ref={testing} className='tasks-column-container'>
        {boardData.tasks.map(task => {
          return (
            <>
            {taskStatus === task.status ? (
                <div className="task-card-collapsed-container">
                <h2>{task.name}</h2>
                <h3>0 of {task.subtasks.length} subtasks</h3>
            </div>
            ) :( <></>) }
            </>
            ) 
        })}
        </div>
        </>
    )
}


export default TaskColumn