import { createStore } from 'redux';

const initialState = {
  isTestBegin: false,
  questionCount: 0,
  ePoint: 0,
  sPoint: 0,
  tPoint: 0,
  jPoint: 0
};

function reducer(currentState, action) {
  if (currentState === undefined || action.type === 'RESET') {
    return initialState
  }

  const newState = { ...currentState };
  if (action.type === 'BEGIN') {
    newState.isTestBegin = true
  } 
  
  if (action.type === 'INCREASE') {
    if(action.quizType === "E"){ newState.ePoint++; }
    if(action.quizType === "S"){ newState.sPoint++; }
    if(action.quizType === "T"){ newState.tPoint++; }
    if(action.quizType === "J"){ newState.jPoint++; }
    newState.questionCount += 1;
  } 
  else if (action.type === 'DECREASE') {
    if(action.quizType === "E"){ newState.ePoint--; }
    if(action.quizType === "S"){ newState.sPoint--; }
    if(action.quizType === "T"){ newState.tPoint--; }
    if(action.quizType === "J"){ newState.jPoint--; }
    newState.questionCount += 1;
  } 
  return newState;
}

export const store = createStore(reducer);