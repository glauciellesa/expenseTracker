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

const Char = (props) => {
  return (
    <div className="container">
      {props.data.map((eachMonth) => (
        <div key={eachMonth} className="content">
          {eachMonth}
        </div>
      ))}
    </div>
  );
};

export default Char;
