import { useState } from "react";
import styled from "styled-components";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  console.log({ props });
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <StyledExpense>
      <ExpensesFilter
        selected={filteredYear}
        expenses={props.items}
        onSelectedYear={selectedYearHandler}
      />
      {props.items.map((elem) => {
        return (
          <div key={elem.title}>
            <ExpenseItem
              title={elem.title}
              amount={elem.amount}
              date={elem.date}
            />
          </div>
        );
      })}
    </StyledExpense>
  );
};
export default Expenses;

const StyledExpense = styled.div`
  margin-top: 20px;
  background-color: #343434;
  border-radius: 8px;
  width: 75%;
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
