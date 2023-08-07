import React, { createContext, useContext } from 'react';

const themeDefault = { border: '10px solid tomato' };
const themeContext = createContext(themeDefault);

export default function App() {
  const theme = useContext(themeContext);

  return (
    <div style={theme}>
      <h1>This is Container</h1>
      <Sub1 />
    </div>
  );
}

function Sub1() {
  const theme = useContext(themeContext);
  return (
    <themeContext.Provider value={{ border: '10px solid orange' }}>
      <div style={theme}>
        <h1>Item 1</h1>
        <Sub2 />
      </div>
    </themeContext.Provider>
  );
}

function Sub2() {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Item 2</h1>
      <Sub3 />
    </div>
  );
}

function Sub3() {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Item 3</h1>
    </div>
  );
}
