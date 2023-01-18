import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";
const StyledExpense = styled.div`
  width: 70vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const Expenses = (props) => {
  return (
    <StyledExpense>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
    </StyledExpense>
  );
};
export default Expenses;
