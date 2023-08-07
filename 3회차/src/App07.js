import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  } 

  @media screen and (min-width: 1024px) {
    width: 600px;
    height: 600px;
  } 
`;

function App() {

  return (
    <>
      <Box />
    </>
  );
}

export default App