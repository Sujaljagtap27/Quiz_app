import React, { useContext, useState } from 'react'
import { Questions } from '../Helpers/QuestionBank'
import { Quizcontext } from '../Helpers/Contexts';

const Quiz = () => {
    const [CurrQuestion,setCurrQuestion] = useState(0)
    const [optionChoosen,setoptionChoosen] = useState("");
    const {Score,setScore,setGamestate,count,setcount}=useContext(Quizcontext);
    const [index,setindex]=useState(0)
   

    const nextQuestion =()=>
    {
      if(Questions[CurrQuestion].answer===optionChoosen)
      {
        setScore(Score+1);
      }
      setCurrQuestion(CurrQuestion+1);
    }

   const finishQuiz=()=>
   {
    if(Questions[CurrQuestion].answer===optionChoosen)
      {
        setScore(Score+1);
      }
      setGamestate("endScreen");
   }

  return (
    <div className='Quiz'>
        <h2>{count+1 +")"}{Questions[CurrQuestion].prompt}</h2>
        <div className='options'>
            <button onClick={()=>setoptionChoosen("A")}><h4>{index + 1 +".)"}{Questions[CurrQuestion].optionA}</h4></button>
            <button onClick={()=>setoptionChoosen("B")}><h4>{index + 2 +".)"}{Questions[CurrQuestion].optionB}</h4></button>
            <button onClick={()=>setoptionChoosen("C")}><h4>{index + 3 +".)"}{Questions[CurrQuestion].optionC}</h4></button>
            <button onClick={()=>setoptionChoosen("D")}><h4>{index + 4 +".)"}{Questions[CurrQuestion].optionD}</h4></button>
        </div>
        {CurrQuestion==Questions.length-1 ? (
            <button onClick={finishQuiz}><h3>Finish Quiz</h3></button>
        ):(<button onClick={() => { setcount(count+1); nextQuestion();}} ><h4>Next Question</h4></button>)}
       
    </div>
  )
}

export default Quiz