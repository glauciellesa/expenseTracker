import { useState } from "react";

import styled from "styled-components";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    //My parente App component called NewExpense and sent to him props. So NewExpense compenent receives the reference to the parent function as a prop.
    props.onAddExpense(expenseData);
    setAddNewExpense(false);
  };

  return (
    <StyledNewExpense>
      {addNewExpense ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={() => setAddNewExpense(true)}>Add new expense</button>
      )}
    </StyledNewExpense>
  );
};
export default NewExpense;

/*
this component will be responsible for creating new expenses. So I'll call form expenses passing props as data, and as I want pass data back from ExpenseForm to NewExpense
i'll need create a event function to handler this props value from children to parent. So as I know my data from expenseFrom will be a object I can then create function to 
handler this data that i recieved as props, so I'll copy the enterdExpenseData and then create a new key called id.    
 */

const StyledNewExpense = styled.div`
  padding: 10px;
  width: 70%;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  text-align: left;
  background-color: rgb(222, 185, 242);

  button {
    font-size: 1rem;
    font-weight: 700;
    padding: 20px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background-color: rgb(222, 35, 232);
  }
`;
