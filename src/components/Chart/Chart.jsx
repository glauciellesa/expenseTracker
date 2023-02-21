import styled from "styled-components";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...dataPointValues);
  return (
    <StyledChart>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </StyledChart>
  );
};

export default Chart;

const StyledChart = styled.div`
  width: 80%;
  padding: 16px;
  border-radius: 8px;
  background-color: rgb(222, 185, 242);
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;
