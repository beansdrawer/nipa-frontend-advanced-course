import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.form`
  width: 33%;
  min-width: 375px;
  display: flex;
`
export const TextInput = styled.input`
  width: 80%;
  height: 3rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.2rem 0 0 0.2rem;

  font-size: 1.2rem;

  &:focus{
    outline: none;
  }
`
export const SubmitInput = styled.input`
  width: 20%;
  height: 3rem;
  border: none;
  border-radius: 0 0.2rem 0.2rem 0;

  color: #ffffff;
  background-color: #5a75aa;
  font-size: 1.2rem;
`

export const UnorderdList = styled.ul`
  width: 33%;
  min-width: 375px;
  height: 10rem;
  padding: 0;

  list-style-type: none;
`
export const ListItem = styled.li`
  padding: 0.375rem;
  margin-bottom: 0.8rem;
  border-radius: 0.2rem; 
  background-color: #FFFFFF;
  
  position: relative;
`

export const TodoText = styled.span`
  display: inline-block;
  width: 90%;
  font-size: 1.2rem;
  line-height: 1.5rem;
`
export const TodoDelete = styled.button`
  width: 10%;
  height: 1.5rem;
  border: none;
  border-radius: 0.5rem; 

  background-color: transparent;
  font-weight: 900;

  position: absolute;
  right: 0;
`