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
    <>
      {props.items.map((elem) => {
        return (
          <StyledExpense key={elem.title}>
            <ExpenseItem
              title={elem.title}
              amount={elem.amount}
              date={elem.date}
            />
          </StyledExpense>
        );
      })}
    </>
  );
};
export default Expenses;
