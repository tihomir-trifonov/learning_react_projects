import React from "react";
import ConnectExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ConnectExpenseList/>
    </div>
);

export default ExpenseDashboardPage;