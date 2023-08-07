// React.memo
import React, { useState } from "react";

// 리액트 메모 했을 때와 안 했을 때 차이를 봐야 함 
const Content = React.memo(({ listText }) => {
  console.log("Content is rendered")
  return <ul>{listText.map((item, index) => <li key={index}>{item}</li>)}</ul>
})

const Form = ({ listText, currentText, setListText, setCurrentText }) => {
  console.log("Form is rendered")
  return <form onSubmit={e => {
    e.preventDefault()
    setListText([...listText, currentText])
  }}
  >
    <input name="text" 
    onChange={e => {
      setCurrentText(e.target.value)
    }}/>
    <input type="submit" />
    <Content listText={listText} />
  </form>
}

const App = () =>  {
  console.log("App is rendered")
  const [ currentText, setCurrentText ] = useState("")
  const [ listText, setListText ] = useState([])
  
  return <>
    <Form setCurrentText={setCurrentText} setListText={setListText} currentText={currentText} listText={listText} />
  </>
}

export default App;
