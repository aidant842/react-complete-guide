import { useState } from "react";
//Components
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
//Data
import expensesData from "./data";

function App() {
    //State
    const [expenses, setExpenses] = useState(expensesData());
    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };
    return (
        <div>
            <NewExpense
                expenses={expenses}
                setExpenses={setExpenses}
                onAddExpense={addExpenseHandler}
            />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
