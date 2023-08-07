import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Title, Button } from './styledComponents'
import { questioncontent } from './utilities/questioncontents'

const Question = (props) => {
    const questionCount = useSelector(state => state.questionCount)
    const dispatch = useDispatch()
    return <div>
        <Title>
            <h3>{questioncontent[questionCount].number}</h3>
            <h2>{questioncontent[questionCount].question}</h2>
        </Title>
        <Button onClick={() => dispatch({ type: "INCREASE", quizType: questioncontent[questionCount].type })}>
            {questioncontent[questionCount].answer1}
        </Button>
        <br />
        <Button onClick={() => dispatch({ type: "DECREASE", quizType: questioncontent[questionCount].type })}>
            {questioncontent[questionCount].answer2}
        </Button>
    </div>
}

export default Question