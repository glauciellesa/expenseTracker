import styled from "styled-components";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <StyledHeader>
      <div className="item">
        <ExpenseDate date={props.date} />
        <div>
          <h1>{props.title}</h1>
        </div>
      </div>
      <div className="price">${props.amount}</div>
    </StyledHeader>
  );
};

export default ExpenseItem;

/* Into this component i'll render each props insid a div. Because i'm working with date i'll create another component
to help me and to style this componet in a more organized way */

const StyledHeader = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  background-color: #636363;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
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
    background-color: rgb(222, 35, 232);
    font-size: 20px;
    padding: 14px;
    border-radius: 8px;
    border: 2px solid white;
  }
`;
