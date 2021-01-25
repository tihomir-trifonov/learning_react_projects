import React from "react"
import {connect} from "react-redux"
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses"

const ExpenseList = (props) => (
    <div>
    {props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id}{...expense} />
        ))
    }
    </div>
)

//  function that maps the store state to components props
const mapStatetoProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStatetoProps)(ExpenseList)
 
