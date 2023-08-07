import React from 'react'
import { useSelector } from 'react-redux'
import Question from './Question'
import Result from './Result'

const Game = () => {
    const questionCount = useSelector(state => state.questionCount)
    return <div style={{ textAlign: "center" }}>
        {questionCount === 12 ?
         <Result /> : 
         <Question /> 
        }
    </div>
}

export default Game