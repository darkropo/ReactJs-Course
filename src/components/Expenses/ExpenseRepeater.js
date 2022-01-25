import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseRepeater.css";
import ExpensesFilter from "./ExpensesFilter";

const ExpenseRepeater = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterByYear = (yearSelected) => {
    setFilteredYear(yearSelected);
    
  };

  const filteredByYear = props.expenses.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterByYear}
        ></ExpensesFilter>
        {filteredByYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default ExpenseRepeater;
