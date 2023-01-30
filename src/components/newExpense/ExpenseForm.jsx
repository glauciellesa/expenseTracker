import { useState } from "react";
import styled from "styled-components";

const ExpenseForm = (props) => {
  const [entiredTitle, setEntiredTitle] = useState("");
  const [entiredAmount, setEntiredAmount] = useState("");
  const [entiredDate, setEntiredDate] = useState("");
  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmout: "",
    enteredDate: "",
  }); */
  const titleChangeHandler = (event) => {
    setEntiredTitle(event.target.value); //take the input value typed
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

  const submitHandlerForm = (event) => {
    event.preventDefault(); // will prevent the page from refresh once the button is clicked
    const expenseData = {
      title: entiredTitle,
      amount: entiredAmount,
      data: new Date(entiredDate), //As entiredData is a string I'll need to convert it to a objetct using the constroctur new Data()
    };
    //Now I'll use the event function I've passed as a pointer in newExpense, whenever save event occurs.
    props.onSaveExpenseData(expenseData);
    //once sumitHandlerForm is called we can reset the value of our input passing the empty props back to our inputs
    setEntiredTitle("");
    setEntiredAmount("");
    setEntiredDate("");
  };

  return (
    <StyledExpenseForm>
      <form onSubmit={submitHandlerForm}>
        <div className="newExpense-container">
          <div className="newExpense-content">
            <div className="newExpense-item">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                value={entiredTitle} //Two-way binding is used to passe back value into the input
                onChange={titleChangeHandler}
              />
            </div>
            <div className="newExpense-item">
              <label htmlFor="title">Amount</label>
              <input
                type="string"
                value={entiredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="newExpense-item">
              <label htmlFor="title">Date</label>
              <input
                type="date"
                value={entiredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="newExpense-action">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </StyledExpenseForm>
  );
};

export default ExpenseForm;

/* 
Into my form expenses I'll creat a form 

return(
  <form onSubmit={this funtion will be handled when the button be clicked. So once I've 
typed all my inputs I'll click the button to send the data, as I don't want any refresh on 
my page I'll use my preventDefault() function js. After as I need take this data and save it 
in a object, I'll need to create a variable to receive this data
exple:.
const expenseData = {
      title: entiredTitle,
      ....
    }
 //once sumitHandlerForm is called we can reset the value of our input passing the empty props back to our inputs
    setEntiredTitle("");
}>
  <div>
  <lable></lable>
  <input onchange={the function here will take the event target value that was typed here and will be passed to my 
    set______, the function of my useState } value={here is the value of my useState, 
    because as I'm using two-way binding that allows to gather use input and also change input value upon form submission.
     (used to reset value after saved it in a variable) } />
  </div>
  <button type=submite>Add expenses</button>
  </form>
)

*/

const StyledExpenseForm = styled.div`
  padding: 10px;
  .newExpense-content {
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 170px;
  }
  .newExpense-item {
    width: 20px;
    padding: 8px;
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
    padding: 10px;
    position: absolute;
    right: 20%;
  }

  button {
    font-size: 1rem;
    font-weight: 700;
    padding: 20px;
    border: none;
    border-radius: 8px;
    background-color: rgb(222, 35, 232);
  }
`;
