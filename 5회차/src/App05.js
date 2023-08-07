import { useState, useReducer } from 'react'

const initialState = { balance: 0 };

const customer = (state, action) => {
  switch (action.type) {
    case 'deposit':
      return { balance: state.balance + action.amountOfMoney };
    case 'withdraw':
      return { balance: state.balance - action.amountOfMoney };
    default:
      throw new Error();
  }
}

const App = () => {
  const [amount, setAmount] = useState(0)
  const [account, bankClerk] = useReducer(customer, initialState);
  console.log(account)
  return (
    <>
      <h1>{account.balance}</h1>
      <input type="number" placeholder="금액 입력" step="1000" onChange={e => setAmount(e.target.value)} />
      <button onClick={() => bankClerk({type: 'withdraw', amountOfMoney: parseInt(amount)})}>-</button>
      <button onClick={() => bankClerk({type: 'deposit', amountOfMoney: parseInt(amount)})}>+</button>
    </>
  );
}

export default App