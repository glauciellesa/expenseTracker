import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";

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

const StyledExpense = styled.div`
  width: 70vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
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
