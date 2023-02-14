import { useState } from "react";
import styled from "styled-components";
import Expenses from "./components/expense/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const [counter, setCounter] = useState(0);
  const expensesData = [
    { title: "Car Insurance", amount: 24.16, date: new Date(2022, 6, 8) },
    { title: "Toilet paper", amount: 297.76, date: new Date(2021, 3, 28) },
    { title: "Pets", amount: 190.76, date: new Date(2021, 5, 1) },
    { title: "Pens", amount: 19.76, date: new Date(2023, 5, 18) },
    { title: "Shampoo", amount: 49.76, date: new Date(2020, 3, 21) },
    { title: "Cream", amount: 30.76, date: new Date(2019, 10, 4) },
  ];

  const addExpenseHandler = (expense) => {
    expensesData.push(expense);
    console.log({ expensesData });
  };
  const countfunc = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <StyledApp>
      <h1> Let's get started! </h1>
      <button onClick={countfunc}> increment {counter} </button>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesData} />
    </StyledApp>
  );
}

export default App;

/* 
As I want that app receive props from the child NewExpense I'll need create my own event function to handler this data passed as props from child to parent. 
*/

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #201f1fc5;
`;
