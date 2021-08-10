import React, { useState } from "react";

import DisplayItem from "./components/Expenses/ExpenseDisplayItem.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const InitialExpense = [
  { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { title: "Bike Insurance", amount: 98.12, date: new Date(2021, 7, 14) },
  { title: "House Insurance", amount: 1235.64, date: new Date(2021, 1, 12) },
  { title: "Life Insurance", amount: 12354.14, date: new Date(2021, 11, 30) },
];

function App() {
  const [expenses, setExpenses] = useState(InitialExpense);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <DisplayItem items={expenses}></DisplayItem>
    </div>
  );
}

export default App;
