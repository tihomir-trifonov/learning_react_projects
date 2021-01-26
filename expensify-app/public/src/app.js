import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore"
import {addExpense} from "./actions/expenses"
// import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"



const store = configureStore()

store.dispatch(addExpense({ description: "1 Water bill", amount: 3, createdAt: 1611582159621 }))
store.dispatch(addExpense({ description: "2 Gass bill", amount: 40, createdAt: 1606906800000 }))
store.dispatch(addExpense({ description: "3 Internet", amount: 5, createdAt: 1610017200000 }))
store.dispatch(addExpense({ description: "4 Rent", amount: 44, createdAt: 1610967600000 }))


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)



// console.log(store.getState())

ReactDOM.render(jsx, document.getElementById('app'));
