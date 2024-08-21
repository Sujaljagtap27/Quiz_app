import React, { useContext, useState } from 'react';  
import { Quizcontext } from '../Helpers/Contexts';  
import { Questions } from '../Helpers/QuestionBank';

const Endscreen = () => {  
  const { Score, setScore, setcount, setGamestate } = useContext(Quizcontext);  
  const [showScore, setShowScore] = useState(false);  

  const restartQuiz = () => {  
    setScore(0);  
    setGamestate("menu");  
    setcount(0);  
  };  

  const toggleScore = () => {  
    setShowScore(!showScore);  
  };  

  return (  
    <div className='Endscreen'>  
      <h1>Quiz Finished</h1>  
      
      <div className='view'>  
        <button onClick={toggleScore}>  
          <h4>View Score</h4>  
        </button>
        {showScore ? (  
        <h4>Your Score: {Score}/{Questions.length}</h4>  
      ) : (  
          ""
      )} 
      </div>  
      <button onClick={restartQuiz}><h3>Restart Quiz</h3></button>  
    </div>  
  );  
};  

export default Endscreen;