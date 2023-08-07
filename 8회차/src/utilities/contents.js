import { createStore } from 'redux';

const contents = [
  { 
    path:"/red",
    imagePath: "red",
    title: "빨간색",
    character: "빨간색입니다",
    detail: {}
  },{ 
    path:"/blue",
    imagePath: "blue",
    title: "파란색",
    character: "파란색입니다",
    detail: {}
  },{ 
    path:"/purple",
    imagePath: "purple",
    title: "보라색",
    character: "보라색입니다",
    detail: {}
  },
]

function reducer(state, action) {
  return { contents } ;
}

export const store = createStore(reducer);