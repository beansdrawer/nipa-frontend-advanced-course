import React from 'react'
import { NavLink } from 'react-router-dom'
import { Items, Item, Image, ColorBox } from './styeldComp'
import { useSelector } from 'react-redux';

const Cards = () => {
  const contents = useSelector((state) => state.contents)
  return (
  <Items>
    {contents.map((content, idx) => {
      return <Item key={idx}>
      <NavLink to={content.path}>
        <ColorBox color={content.imagePath}></ColorBox>
      </NavLink>
      <h1 style={{textAlign:'center'}}>{content.title}</h1>
      <p style={{padding: 10}}>{content.character}</p>
    </Item>
    })}
  </Items>
  )
}

export default Cards;