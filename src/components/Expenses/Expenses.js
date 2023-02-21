import { useState } from "react";
//Components import
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
//Styles
import "./Expenses.css";
import "./ExpensesFilter.css";

const Expenses = ({ className, expenses }) => {
    //State
    const [year, setYear] = useState("2021");
    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
    });
    return (
        <div>
            <Card className={`expenses ${className}`}>
                <ExpensesFilter year={year} setYear={setYear} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList filteredExpenses={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
