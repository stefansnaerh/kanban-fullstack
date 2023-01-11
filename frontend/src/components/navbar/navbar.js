
import './navbar.scss'

// icons
import plusSign from '../../images/+.svg'
import threeDots from '../../images/threeDots.svg'
import dropdownArrow from '../../images/dropdownArrow.svg'
import boardIcon from '../../images/boardIcon.svg'
import boardIconPurple from '../../images/boardIconPurple.svg'
import boardIconWhite from '../../images/boardIconWhite.svg'

import Navlinks from '../navlinks/navlinks'

import { useState } from 'react'



const Navbar = ({boardData}) => {
    const [displayEditAndDelete, setDisplayEditAndDelete] = useState("edit-delete-board-container-none")
    

    const displayEditAndDeleteModal = () => {
        displayEditAndDelete === "edit-delete-board-container-none" ? 
        setDisplayEditAndDelete('edit-delete-board-container'):
        setDisplayEditAndDelete('edit-delete-board-container-none')
    }


    return (
        <header>
            <div className='logo-container'>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>
           <Navlinks
           boardData={boardData}
           />
            <div className='add-column-see-more-container'>
                <button className='add-column-button'>
                    <img alt='plus sign' src={plusSign}></img>
                </button>
                <button className='three-dots-button' onClick={displayEditAndDeleteModal}>
                <img alt='three dots' className='three-dots' src={threeDots}></img>
                </button>
            </div>
            <div className={displayEditAndDelete}>
                <button className='edit-board'>Edit Board</button>
                <button className='delete-board'>Delete Board</button>
            </div>
        </header>
    )
}


export default Navbar