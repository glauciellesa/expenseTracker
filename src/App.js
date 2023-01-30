import styled from "styled-components";
import Expenses from "./components/expense/Expenses";
import ExpensesFilter from "./components/expensesFilter/ExpensesFilter";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const expensesData = [
    { title: "Car Insurance", amount: 24.16, date: new Date(2022, 6, 8) },
    { title: "Toilet paper", amount: 297.76, date: new Date(2021, 3, 28) },
    { title: "Pets", amount: 190.76, date: new Date(2021, 5, 1) },
    { title: "Pens", amount: 19.76, date: new Date(2023, 5, 1) },
    { title: "paper", amount: 30.76, date: new Date(2019, 10, 4) },
  ];

  const addExpenseHandler = (expense) => {
    expensesData.push(expense);
    console.log({ expensesData });
  };

  return (
    <StyledApp>
      <h1> Let's get started! </h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter expenses={expensesData} />
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
