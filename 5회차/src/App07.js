import React, { useEffect, useState } from 'react';
import axios from 'axios'

const App = () => {

  const [image, setImage] =  useState(undefined)

  // 처음부터 강아지가 표시되게끔 하고 싶다면 이렇게 
  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then(result => setImage(result.data.message))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      <button onClick={() => {
        axios.get("https://dog.ceo/api/breeds/image/random").then(result => setImage(result.data.message))
        .catch(error => console.log(error))
      }}>강아지 사진 변경하기</button> <br />

      {/* <button onClick={async () => {
        try{
          const response = await axios.get("https://dog.ceo/api/breeds/image/random")
          setImage(response.data.message)
        }catch(error){
          console.log(error)
        }
      }}>강아지 사진 변경하기</button> <br /> */}
      
      <img src={image} alt="랜덤 강아지 이미지" width="640" />
    </>
  );
}

export default App