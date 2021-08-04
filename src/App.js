import DisplayItem from "./components/Expenses/ExpenseDisplayItem.js";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Bike Insurance", amount: 98.12, date: new Date(2021, 7, 14) },
    { title: "House Insurance", amount: 1235.64, date: new Date(2021, 1, 12) },
    { title: "Life Insurance", amount: 12354.14, date: new Date(2021, 11, 30) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <DisplayItem items={expenses}></DisplayItem>
    </div>
  );
}

export default App;
