import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredExpense = props.filteredItems;

  return (
    <ul>
      {filteredExpense.map((elem) => (
        <ExpenseItem
          key={elem.title}
          title={elem.title}
          amount={elem.amount}
          date={elem.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
