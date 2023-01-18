import styled from "styled-components";
import ExpenseItem from "./components/ExpenseItem";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <StyledApp>
      <ExpenseItem />
    </StyledApp>
  );
}

export default App;
