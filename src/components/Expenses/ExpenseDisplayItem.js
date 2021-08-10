import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import "./ExpenseDisplayItem.css";

function DisplayItem(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div className="expenses">
      <ExpensesFilter onYearChange={yearChangeHandler}/>
      {filteredExpenses.map((item) => (
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </div>
  );
}

export default DisplayItem;
