// icons
import dropdownArrow from '../../images/dropdownArrow.svg'
import boardIcon from '../../images/boardIcon.svg'
import boardIconPurple from '../../images/boardIconPurple.svg'
import boardIconWhite from '../../images/boardIconWhite.svg'

import { useContext, useState, useRef, useEffect } from 'react'
import { BackgroundGrayContext } from '../../App'
import useOnClickOutside from '../../utils/useOnClickOutside'


const Navlinks = ( {boardData} ) => {

    const [displayLinks, setDisplayLinks] = useState("links-container-none")
    const {greyBackground, setGrayBackground} = useContext(BackgroundGrayContext)
    const [indexOfBoard, setIndexOfBoard] = useState(0)
    const ref = useRef();

        // function that handles click outside of modals to close them
        useOnClickOutside(ref, () => {
            setDisplayLinks("links-container-none")
            setGrayBackground("App")
        });

    const handleDropdownMenu = () => {
        displayLinks === "links-container-none" ? 
        setDisplayLinks('links-container'):
        setDisplayLinks('links-container-none')  
        setGrayBackground("App-disabled")
    }
    return (
        <>
        <nav>
                <h1>{boardData[0].title}</h1>
                <button  onClick={handleDropdownMenu}>
                    <img  alt='click to see more' src={dropdownArrow}></img>
                </button>
                <div ref={ref} className={displayLinks}>
                    <h3>All boards ( {boardData.length} )</h3>
                    {boardData.map(board => {
                        return (
                            <>
                            {boardData.indexOf(board) === indexOfBoard ? (
                                <div className="icon-links-container-focused">
                                    <img src={boardIconWhite}/>
                                    <a>{board.title}</a>
                                </div>
                              )  : (
                                <div className="icon-links-container">
                                    <img src={boardIcon}/>
                                    <a>{board.title}</a>
                                </div>
                                )
                            }
                        </>
                        )
                    })}
                    <div className='create-board-container'>
                    <img src={boardIconPurple}/>
                    <button className='create-board-btn'> + Create New Board</button>
                    </div>
                    </div>
            </nav>
        </>
    )
}


export default Navlinks