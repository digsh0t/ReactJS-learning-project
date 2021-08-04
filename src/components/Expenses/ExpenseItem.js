import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseRenderDate";
import Card from "../UI/Card.js"

function ExpenseItem(props) {

  return (

    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div classhName="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
