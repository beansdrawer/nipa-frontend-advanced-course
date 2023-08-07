import React from 'react';
import styled, { keyframes } from 'styled-components';

const Eyes = styled.div`
  display: flex;
  justify-content: center;
`;
const Eye = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  position: relative;
`;

const moving = keyframes`
  0%{
    top: 40%;
    left: 10%;
  }
  100%{
    top: 40%;
    left: 70%;
  }
`
const Ball = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000000;
  border-radius: 50%;
  position: absolute;
  animation: ${moving} 3s 0s linear alternate infinite;
`


function App() {

  return (
    <Eyes>
      <Eye>
        <Ball />
      </Eye>
      <Eye>
        <Ball />
      </Eye>
    </Eyes>
  );
}

export default App