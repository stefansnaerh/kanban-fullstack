import './mainPage.scss'

import TaskColumn from "../../components/taskColumn/taskColumn";
import ViewTaskModal from '../../components/viewTaskModal/viewTask';


import { BackgroundGrayContext } from '../../App';
import { useContext, useState } from 'react';

const MainPage = ( {currentBoard, boardData} ) => {
    console.log(currentBoard)
    // changing column object to array
    const {taskContext, setTaskContext} = useContext(BackgroundGrayContext)
    const [displayViewTask, setDisplayViewTask] = useState(false)
    const columnsObjectToArray = Object.values(currentBoard.columns[0])
    
return (
    <main>
    {columnsObjectToArray.map(column => {
        return (
            <div  className="column-container">
            <TaskColumn
            currentBoard={currentBoard}
            taskStatus={column}
            setDisplayViewTask={setDisplayViewTask}
            />
            </div>
        )
    })}
    {displayViewTask ? (
    <ViewTaskModal
    taskContext={taskContext}
    columns={columnsObjectToArray}
    setDisplayViewTask={setDisplayViewTask}
    displayViewTask={displayViewTask}
    currentBoard={currentBoard}
    /> 
    ) : null}

   { /*
   <AddTaskModal
boardData={boardData}/> */}
    </main>
)
}

export default MainPage



