import { useState } from 'react'
import './App.css'
import Mainmenu from './Components/Mainmenu'
import Quiz from './Components/Quiz'
import Endscreen from './Components/Endscreen'
import { Quizcontext } from './Helpers/Contexts'

function App() {
  const [Gamestate, setGamestate] = useState("menu")
  const [Score,setScore] = useState(0);
  const [count,setcount] =useState(0);

  return (
    <>
      <div className='App'>
      <h1>Quiz App</h1>
      <Quizcontext.Provider value={{Gamestate,setGamestate,Score,setScore,count,setcount}}>
      {Gamestate === "menu" && <Mainmenu/>}
      {Gamestate === "quiz" && <Quiz/>}
      {Gamestate === "endScreen" && <Endscreen/>}
      </Quizcontext.Provider>
        </div>
      
    </>
  )
}

export default App
