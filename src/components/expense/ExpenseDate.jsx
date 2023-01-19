import styled from "styled-components";

const StyledDate = styled.div`
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

const ExpenseDate = (props) => {
  const date = new Date(props.dateS);
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
