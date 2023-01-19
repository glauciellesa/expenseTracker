import styled from "styled-components";
import ExpenseForm from "./ExpenseForm";

const StyledNewExpense = styled.div`
  width: 70vw;
  height: 45vh;
  border-radius: 8px;
  padding: 10px;
  background-color: #d49cf2;
`;

const NewExpense = (props) => {
  return (
    <StyledNewExpense>
      <ExpenseForm data={props.data} />
    </StyledNewExpense>
  );
};
export default NewExpense;
