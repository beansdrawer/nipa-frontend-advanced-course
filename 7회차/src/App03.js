import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink to="/">메인화면</NavLink>
        </li>
        <li>
          <NavLink to="/banana">바나나</NavLink>
        </li>
        <li>
          <NavLink to="/orange">오렌지</NavLink>
        </li>
        <li>
          <NavLink to="/tomato">토마토</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/banana" element={<>바나나</>} />
        <Route path="/orange" element={<>오렌지</>} />
        <Route path="/tomato" element={<>토마토</>} />
        <Route path="/" element={<>메인화면</>} />
      </Routes>
    </BrowserRouter>
  );
}