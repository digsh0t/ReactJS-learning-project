import ExpenseItem from "./ExpenseItem";
import "./ExpenseDisplayItem.css";

function DisplayItem(props) {
  return (
    <div className="expenses">
      {props.items.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </div>

  );
}

export default DisplayItem;
