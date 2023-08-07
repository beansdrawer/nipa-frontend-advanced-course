import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Home from './Home'
import Game from './Game'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {
  const isTestBegin = useSelector(state => state.isTestBegin)
  return <Container>
    {isTestBegin ? <Game /> : <Home /> }
  </Container>
}

export default App