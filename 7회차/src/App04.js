import React from 'react';
import { BrowserRouter, Route, Routes, NavLink, useParams } from 'react-router-dom'

const contents = [
  { title: "바나나", route: "/banana" },
  { title: "오렌지", route: "/orange" },
  { title: "토마토", route: "/tomato" },
  { title: "메인화면", route: "/" } 
]

export default function App() {
  return (
    <BrowserRouter>
      <ul>
        {contents.map((item, index) => <li key={index}><NavLink to={item.route}>{item.title}</NavLink></li>)}
      </ul>
      <Routes>
        <Route path="/:topic" element={<Page />} />
        <Route path="/" element={<h1>main page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

const Page = () => {
  let params = useParams();
  return <h1>{params.topic}</h1>
}