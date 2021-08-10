import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseRenderDate";
import Card from "../UI/Card.js";

function ExpenseItem(props) {
  // function clickHandler() {}

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div classhName="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
