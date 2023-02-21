import styled from "styled-components";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <StyledChartBar>
      <div className="barInner">
        <div className="barFill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="barLabel">{props.label}</div>
    </StyledChartBar>
  );
};

export default ChartBar;

const StyledChartBar = styled.div`
  .barInner {
    height: 100%;
    width: 100%;
    border: 1px solid #313131;
    border-radius: 12px;
    background-color: rgb(222, 156, 242);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .barFill {
    background-color: rgb(192, 15, 246);
    width: 100%;
    transition: all 0.3s ease-out;
  }
  .barLabel {
    font-weight: bold;
    font-size: 8px;
    text-align: center;
  }
`;
