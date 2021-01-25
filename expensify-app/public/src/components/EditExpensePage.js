import React from "react";
import {connect} from "react-redux"
import { editExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm"
import {removeExpense} from "../actions/expenses"



const EditExpensePage = (props) => {
    return(
        <div>
            <h1>EDIT</h1>
            <ExpenseForm
            expense={props.expense}
                onSubmit={
                    (expense) => {
                        props.dispatch(editExpense(props.expense.id, expense))
                        props.history.push("/");
                    }
                }
            />
            <button onClick={
                () => {
                    props.dispatch(removeExpense({ id: props.expense.id }));
                    props.history.push("/");
                }
            }
            >Remove</button>
        </div>
    )
};

const mapStateToProp = (state, props) =>
({expense: state.expenses.find((expense)=>expense.id === props.match.params.id)})

export default connect(mapStateToProp)(EditExpensePage)