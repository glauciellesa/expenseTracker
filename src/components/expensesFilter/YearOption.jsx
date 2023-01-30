const YearOption = (props) => {
  const uniqueYear = [...new Set(props.yearOption)].sort();
  console.log(uniqueYear);
  const forEachYear = uniqueYear.map((eachYear) => (
    <option key={eachYear} value={eachYear}>
      {eachYear}
    </option>
  ));
  return <>{forEachYear}</>;
};

export default YearOption;
