import styled from "styled-components";
import Expenses from "./components/Expenses";

const StyledApp = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const expensesData = [
    { title: "Car Insurance", amount: 24.16, date: new Date(2022, 6, 8) },
    { title: "Toilet paper", amount: 297.76, date: new Date(2021, 3, 28) },
    { title: "Pets", amount: 190.76, date: new Date(2021, 5, 1) },
  ];

  return (
    <StyledApp>
      <h1> Let's get started! </h1>
      <Expenses expenses={expensesData} />
    </StyledApp>
  );
}

export default App;
