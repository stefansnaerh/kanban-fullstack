import './mainPage.scss'

import TaskColumn from "../../components/taskColumn/taskColumn";


const MainPage = ( {boardData} ) => {
    // Need to map over this eventually when i delete the dummy data
    const columnsObjectToArray = Object.keys(boardData.columns)

return (
    <main>
    {boardData.columns.map(column => {
        console.log(column)
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



