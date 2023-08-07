import React, { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  }
  const onDecrease = () => {
    setNumber(number - 1);
  }
  const handleChange = (param) => {
    setText(param);
  }

  useEffect(() => {
    console.log('의존성 배열이 비워져 있으면, 최초 1회만 호출됨.')
  }, [])

  useEffect(() => {
    console.log('의존성 배열이 채워져 있으면, 의존하는 상태에 대해서 늘 호출됨.')
  }, [text])

  useEffect(() => {
    console.log('의존성 배열이 아예 없으면 어떻게 되나요? 직접 확인해보세요.')
  })

  return (
    <>
      <input type='text' placeholder='아무 내용이나 써보기' onChange={e => handleChange(e.target.value)}/>
      <p>{text}</p>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  );
}

export default App