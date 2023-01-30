import styled from "styled-components";
import ExpenseGrafic from "../expenseGrafic/ExpenseGrafic";
import YearOption from "./YearOption";

const ExpensesFilter = (props) => {
  const year = props.expenses.map((eachDate) => eachDate.date.getFullYear());
  console.log({ year });

  return (
    <StyledFilter>
      <h3>Filter by year</h3>
      <select>
        <YearOption yearOption={year} />
      </select>
      <ExpenseGrafic />
    </StyledFilter>
  );
};

export default ExpensesFilter;

const StyledFilter = styled.div`
  width: 80%;
  color: #fff;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  select {
    height: 30px;
    border-radius: 4px;
    padding: 0 8px;
  }
`;
