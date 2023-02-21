import { useState } from "react";
//Styles
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, showFormHandler }) => {
    //State
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });
    //Event Handlers
    const titleChangeHandler = (e) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: e.target.value };
        });
    };
    const amountChangeHanlder = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: e.target.value,
            };
        });
    };
    const dateChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: e.target.value,
            };
        });
    };
    const expenseFormHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        };
        onSaveExpenseData(expenseData);
        /* setExpenses((prevState) => {
            return {
                ...prevState,
                expenseData,
            };
        }); */
        setUserInput({
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: "",
        });
    };
    return (
        <div>
            <form action="" onSubmit={expenseFormHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            onChange={titleChangeHandler}
                            type="text"
                            value={userInput.enteredTitle}
                            required
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            onChange={amountChangeHanlder}
                            value={userInput.enteredAmount}
                            required
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            type="date"
                            min="2019-01-01"
                            max="2022-12-31"
                            onChange={dateChangeHandler}
                            amount={userInput.enteredDate}
                            required
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={showFormHandler}>
                        Cancel
                    </button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    );
};

export default ExpenseForm;
