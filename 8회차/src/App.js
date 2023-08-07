import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from './styeldComp'
import Cards from './Cards'
import Detail from './Detail'
import { useSelector } from 'react-redux';

function App() {
  return (
      <BrowserRouter> 
        <Menu>
          <h2>내가 좋아하는 무언가의 콜렉션</h2>
        </Menu>
        <Routes>
          {useSelector((state) => state.contents).map((content, idx) => {
            return <Route path={content.path} key={idx} element={<Detail content={content.detail} />} />
          })}
          <Route path="/" element={<Cards />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
