import React, { useRef } from 'react';

function App() {
  const inputElem = useRef(null)
  const handleClick = () => {
    inputElem.current.focus()
  }
  return (
    <>
      <input ref={inputElem} />
      <button onClick={handleClick}>Focus on input</button>
    </>
  );
}

export default App