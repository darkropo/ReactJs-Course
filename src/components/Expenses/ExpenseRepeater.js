import { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseRepeater.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const ExpenseRepeater = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterByYear = (yearSelected) => {
    setFilteredYear(yearSelected);
  };

  const filteredByYear = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterByYear}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredByYear}></ExpensesChart>
        <ExpensesList expenses={filteredByYear}></ExpensesList>
      </Card>
    </div>
  );
};

export default ExpenseRepeater;
