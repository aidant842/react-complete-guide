import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//Styles
import "./NewExpense.css";
//Components
import ExpenseForm from "./ExpenseForm";
const NewExpense = ({ expenses, setExpenses, onAddExpense }) => {
    //state
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: uuidv4(),
        };
        onAddExpense(expenseData);
        setShowForm(false);
    };
    const showFormHandler = () => {
        setShowForm(!showForm);
    };
    return (
        <div className="new-expense">
            {showForm ? (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    showFormHandler={showFormHandler}
                />
            ) : (
                <button onClick={showFormHandler}>Add new expense</button>
            )}
        </div>
    );
};

export default NewExpense;
