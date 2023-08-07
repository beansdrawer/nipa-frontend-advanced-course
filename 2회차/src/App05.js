import { useState } from 'react'
import "./App05.css"

function App(){

  const [ count, setCount ] = useState(0)

  return <>
    <h1 className="heading">{count}</h1>
    <div className="div">
      <button className="btn" onClick={() => setCount(count - 1)}>-</button>
      <button className="btn" onClick={() => setCount(count + 1)}>+</button>
    </div>
  </>
}

export default App;