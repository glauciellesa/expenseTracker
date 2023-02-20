import styled from "styled-components";

const ExpenseDate = (props) => {
  const date = props.date;
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <StyledDate>
      <div>{month}</div>
      <div className="day">{day}</div>
      <div>{year}</div>
    </StyledDate>
  );
};

export default ExpenseDate;

/* As I'm working with a date constructur that return a object wiht my date, I'll need, once I recice it in my ExpenseDate component, to convert this date into
 a string, using toLocalString("country", "what: wich format") to get my month, my day and year and after that i'll return each variavle into a div */

const StyledDate = styled.div`
  width: 50px;
  padding: 10px;
  background-color: #201f1fc5;
  border: 2px solid #fff;
  border-radius: 8px;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .day {
    font-size: 18px;
  }
`;
