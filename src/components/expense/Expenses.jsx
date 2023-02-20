import { useState } from "react";
import styled from "styled-components";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <StyledExpense>
      <ExpensesFilter
        selected={filteredYear}
        expenses={props.items}
        onSelectedYear={selectedYearHandler}
      />
      <ExpensesList filteredItems={filteredExpense} />
    </StyledExpense>
  );
};
export default Expenses;

const StyledExpense = styled.div`
  padding: 20px 10px 40px 10px;
  background-color: #343434;
  border-radius: 8px;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

/*
1. the component expense will recive a props called items with my array of items
2. I'll return each item using a map to go through this array of items and for each 
item I'll call the component Expenses Item passing as props my item.value
const Expenses = (props) => {
  return(
    <>
    {
      props.items.map((item) => {
        return(
          <div key={item.title}>
          <ExpenseItem title={item.title} amount={item.amout} data={item.data}></ExpenseItem>
          </div>
        )
      })

    }
    </>
  )
} 
 */
