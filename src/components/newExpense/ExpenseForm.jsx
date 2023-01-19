import styled from "styled-components";

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

const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <StyledExpenseForm>
      <form>
        <div className="newExpense-container">
          <div className="newExpense-item">
            <label htmlFor="title">Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="newExpense-item">
            <label htmlFor="title">Amount</label>
            <input type="number" onChange={amountChangeHandler} />
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
