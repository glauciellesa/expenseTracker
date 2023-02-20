import styled from "styled-components";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    //My parente App component called NewExpense and sent to him props. So NewExpense compenent receives the reference to the parent function as a prop.
    props.onAddExpense(expenseData);
  };

  return (
    <StyledNewExpense>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
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
  width: 70vw;
  height: 30vh;
  border-radius: 8px;
  padding: 10px;
  background-color: rgb(222, 185, 242);
`;
