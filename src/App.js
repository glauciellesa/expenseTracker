import { useState } from "react";
import styled from "styled-components";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  { title: "Car Insurance", amount: 24.16, date: new Date(2022, 6, 8) },
  { title: "Toilet paper", amount: 297.76, date: new Date(2021, 3, 28) },
  { title: "Pets", amount: 190.76, date: new Date(2021, 5, 1) },
  { title: "Pens", amount: 19.76, date: new Date(2023, 5, 18) },
  { title: "Shampoo", amount: 49.76, date: new Date(2020, 3, 21) },
  { title: "Cream", amount: 30.76, date: new Date(2019, 10, 4) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <StyledApp>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </StyledApp>
  );
}

export default App;

/* 
As I want that app receive props from the child NewExpense I'll need create my own event function to handler this data passed as props from child to parent. 
*/

const StyledApp = styled.div`
  padding: 30px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
