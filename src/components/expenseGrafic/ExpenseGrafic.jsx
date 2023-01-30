import styled from "styled-components";

const ExpenseGrafic = () => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <StyledGrafic>
      <div className="container">
        {month.map((eachMonth) => (
          <>
            <div key={eachMonth} className="content">
              {eachMonth}
            </div>
          </>
        ))}
      </div>
    </StyledGrafic>
  );
};

export default ExpenseGrafic;

const StyledGrafic = styled.div`
  .container {
    height: 120px;
    border-radius: 8px;
    background-color: rgb(222, 185, 242);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: black;
    font-size: smaller;
    margin: 10px 20px;
    gap: 10px;
    width: 10px;
    height: 80px;
    border-radius: 10px;
    background-color: rgb(222, 156, 242);
  }
`;
