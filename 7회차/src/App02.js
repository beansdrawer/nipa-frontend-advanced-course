import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      isSignIn: false,
    };
  }
  const newState = { ...currentState };
  if (action.type === 'SignIn') {
    newState.isSignIn = true
    newState.userName = action.userName
  }
  return newState;
}
const store = createStore(reducer);
export default function App() {
  return (
    <div>
      <h1>아주아주 멋진 웹 서비스입니다. 로그인 필수!</h1>
      <div>
        <Provider store={store}>
          <Form></Form>
          <Service />
        </Provider>
      </div>
    </div>
  );
}

const Form = () => {
  const dispatch = useDispatch();
  return <form onSubmit={e => {
    e.preventDefault()
    dispatch({
      type: "SignIn",
      userName: e.target.userName.value
    })
  }}>
    <input name="userName" placeholder="사용자 이름을 입력하세요" />
    <button type="submit">Sign In</button>
  </form>
}

const Service = () => {
  const userName = useSelector((state) => state.userName);

  return <>{userName ? <p>{userName}님! 환영합니다!</p> : <p>로그인 후 이용할 수 있습니다</p>}</>
}