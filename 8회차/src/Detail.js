import React from 'react'
import { useNavigate } from 'react-router-dom';

const Detail = (props) =>{
  const navigate = useNavigate();
  return <div style={{paddingTop:20, textAlign:'center', color: 'white'}}>
    <p>전달된 속성값을 토대로 페이지 구성하기</p>
    <button onClick={() => navigate(-1)}>BACK</button>
  </div>
}

export default Detail