import { useState } from "react";
import styled from "styled-components";

const ExpenseForm = () => {
  const [entiredTitle, setEntiredTitle] = useState("");
  const [entiredAmount, setEntiredAmount] = useState("");
  const [entiredDate, setEntiredDate] = useState("");
  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmout: "",
    enteredDate: "",
  }); */
  const titleChangeHandler = (event) => {
    setEntiredTitle(event.target.value);
    /* setUserInput(() => {
      return {
        ...userInput,
        enteredTitle: event.target.value,
      };
    }); */
  };
  const amountChangeHandler = (event) => {
    setEntiredAmount(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredAmout: event.target.value,
    }); it's not a good practice*/
    /* setUserInput(() => {
      return {
        ...userInput,
        enteredAmout: event.target.value,
      };
    }); */
  };
  const dateChangeHandler = (event) => {
    setEntiredDate(event.target.value);
    /* setUserInput(() => {
      return {
        ...userInput,
        enteredDate: event.target.value,
      };
    }); */
  };

  const submitHandler = (event) => {
    event.preventDefault(); // will prevent the page from reloading once the button is clicked
    const expenseData = {
      title: entiredTitle,
      amount: entiredAmount,
      data: new Date(entiredDate), //As entiredData is a string I'll need to convert it to a objetct using the constroctur new Data()
    };
    console.log(expenseData);
  };
  return (
    <StyledExpenseForm>
      <form onSubmit={submitHandler}>
        <div className="newExpense-container">
          <div className="newExpense-item">
            <label htmlFor="title">Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="newExpense-item">
            <label htmlFor="title">Amount</label>
            <input type="string" onChange={amountChangeHandler} />
          </div>
          <div className="newExpense-item">
            <label htmlFor="title">Date</label>
            <input type="date" onChange={dateChangeHandler} />
          </div>
        </div>
        <div className="newExpense-action">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </StyledExpenseForm>
  );
};

export default ExpenseForm;

const StyledExpenseForm = styled.div`
  .newExpense-container {
    height: 40px;
    font-size: 1.5rem;
    font-weight: 700;
    gap: 10px;
  }
  .newExpense-item {
    padding: 10px;
  }
  label {
    padding-right: 10px;
    float: left;
    display: block;
    width: 70vw;
  }
  label:after {
    content: ": ";
  }

  input {
    padding: 0 3px;
    border-radius: 4px;
    border: none;
    width: 30vw;
    height: 40px;
    background-color: #fff;
  }
  .newExpense-action {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
  }

  button {
    font-size: 1rem;
    font-weight: 700;
    padding: 20px;
    border: none;
    border-radius: 8px;
    background-color: #a323e8;
  }
`;
