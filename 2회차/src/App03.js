function App(){

  const content = "JSX"
  const style = {
    color: "teal",
    fontSize: 18
  }

  return <>
    <h1>처음 만나는 JSX</h1>
    {/* 주석은 이렇게 처리한다 */}
    <p style={style} className="text">새로운 문법이지만, 마냥 낯설지만은 않은 {content}</p>
  </>
}

export default App;