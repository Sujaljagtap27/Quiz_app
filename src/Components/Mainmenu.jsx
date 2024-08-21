import React, { useContext } from 'react'
import Quiz from './Quiz'
import "../App.css"
import { Quizcontext } from '../Helpers/Contexts'

const Mainmenu = () => {
    const {Gamestate , setGamestate}=useContext(Quizcontext);
  return (
    <div className='Menu'><h3>Are You Ready ?</h3>
    <button
    onClick={()=>
    {
        setGamestate("quiz");
    }
    }><h3>Start Quiz</h3></button>
    </div>
  )
}

export default Mainmenu