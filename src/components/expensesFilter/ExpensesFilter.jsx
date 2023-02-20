import styled from "styled-components";
import ExpenseGrafic from "../expenseGrafic/ExpenseGrafic";
import YearOption from "./YearOption";

const ExpensesFilter = (props) => {
  const year = props.expenses.map((eachDate) => eachDate.date.getFullYear()); //cycle through my array to just print year option

  const dropDownChangeHandler = (event) => {
    const selectedYear = event.target.value;
    props.onSelectedYear(selectedYear);
  };

  return (
    <StyledFilter>
      <div className="filter">
        <h3>Filter by year</h3>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <YearOption yearOption={year} />
        </select>
      </div>
      <ExpenseGrafic />
    </StyledFilter>
  );
};

export default ExpensesFilter;

const StyledFilter = styled.div`
  width: 75%;
  color: #fff;
  font-size: 20px;
  .filter {
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  select {
    height: 30px;
    border-radius: 4px;
    padding: 0 25px;
  }
`;
