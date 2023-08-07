import React from 'react';
import styled, { keyframes } from 'styled-components';

const boxFade = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

const AnimatedBox = styled.div`
  width: 300px;
  height: 300px;
  background: tomato;
  animation: ${boxFade} 2s 500ms infinite linear alternate;
`;

function App() {

  return (
    <>
      <AnimatedBox />
    </>
  );
}

export default App