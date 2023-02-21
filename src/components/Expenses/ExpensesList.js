//Styles
import "./ExpensesList.css";
//Components Import
import ExpenseItem from "./ExpenseItem";
const ExpensesList = ({ filteredExpenses }) => {
    // If statement here only possible if this is the only JSX, not possible if returning other components in JSX
    if (filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }
    return (
        <ul className="expenses-list">
            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;
