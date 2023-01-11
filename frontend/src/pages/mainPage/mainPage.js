import './mainPage.scss'

import TaskColumn from "../../components/taskColumn/taskColumn";


const MainPage = ( {boardData} ) => {



return (
    <main>
    {boardData.columns.map(column => {
        return (
            <div  className="column-container">
            <TaskColumn
            boardData={boardData}
            taskStatus={column}
            />
            </div>
        )
    })}
    </main>
   
)
}

export default MainPage



