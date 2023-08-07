// useMemo
import React, { useState, useMemo } from "react";

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
    {
      useMemo(() => {
        console.log("Content is rendered")
        return <ul>{listText.map((item, index) => <li key={index}>{item}</li>)}</ul>
      }, [listText])
    }
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
