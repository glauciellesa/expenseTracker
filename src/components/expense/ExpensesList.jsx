import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredExpense = props.filteredItems;

  return (
    <StyledExpensesList>
      <ul>
        {filteredExpense.map((elem) => (
          <ExpenseItem
            key={elem.title}
            title={elem.title}
            amount={elem.amount}
            date={elem.date}
          />
        ))}
      </ul>
    </StyledExpensesList>
  );
};

export default ExpensesList;

const StyledExpensesList = styled.div`
  width: 90%;
`;
