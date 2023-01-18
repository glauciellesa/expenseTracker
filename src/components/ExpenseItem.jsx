import styled from "styled-components";
import ExpenseDate from "./ExpenseDate";

const StyledHeader = styled.div`
  color: #fff;
  width: 50%;
  height: fit-content;
  border-radius: 5px;
  padding: 10px;
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
  .date {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #353535;
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #fff;
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

const ExpenseItem = () => {
  const item = "Car Insurance";
  const date = new Date(Date.UTC(2020, 10, 2, 3)).toLocaleString();
  const price = 294.69;

  return (
    <StyledHeader>
      <div className="item">
        <ExpenseDate dateS={date} />
        <div>
          <h1>{item}</h1>
        </div>
      </div>
      <div className="price">${price}</div>
    </StyledHeader>
  );
};

export default ExpenseItem;
