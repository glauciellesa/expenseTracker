import styled from "styled-components";

const StyledHeader = styled.div`
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

  button {
    background-color: purple;
    font-size: 20px;
    height: 60px;
    padding: 14px;
    border-radius: 5px;
    border: 2px solid white;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>March 28th 2022</div>
      <div>
        <h1>Car Insurance</h1>
      </div>
      <button>$ 294.54</button>
    </StyledHeader>
  );
};

export default Header;
