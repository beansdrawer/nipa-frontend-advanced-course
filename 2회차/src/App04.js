function Food(props){
  return <h1 style={{ color: props.color }} onClick={() => props.handleClick(props.food)}>
    {props.food}
  </h1>
}

function App(){

  const handleClick = (food) => {
    alert(`맛있는 ${food}!`)
  }

  return <>
    <Food /> {/* 값이 전달되지 않으면 비어 있는 채로 출력된다 */}
    <Food food="떡볶이" color="red" handleClick={handleClick} />
    <Food food="순대국밥" color="darkgray" handleClick={handleClick} />
    <Food food="후라이드 치킨" color="gold" handleClick={handleClick} />
  </>
}

export default App;