import styled from "styled-components";
import ExpenseDate from "./ExpenseDate";

const StyledHeader = styled.div`
  color: #fff;
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  padding: 20px;
  background-color: #636363;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  .item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .price {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b209b2;
    font-size: 20px;
    padding: 14px;
    border-radius: 8px;
    border: 2px solid white;
  }
`;

const ExpenseItem = (props) => {
  return (
    <StyledHeader>
      <div className="item">
        <ExpenseDate dateS={props.date} />
        <div>
          <h1>{props.title}</h1>
        </div>
      </div>
      <div className="price">${props.amount}</div>
    </StyledHeader>
  );
};

export default ExpenseItem;
