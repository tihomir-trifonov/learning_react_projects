import {createStore, combineReducers} from "redux"
import uuid from "uuid"

console.log("redux expensify")

// ADD_EXPENSE
const addExpense = ({
    description="",
    note="", 
    amount=0,
    creditAt=0
    } = {}) => ({
    type: "ADD_EXPENSE", 
    expense: {
        id: uuid(),
        description,
        note, 
        amount,
        creditAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({
    id:""
} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMAUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            console.log(typeof action.expense)
            return [
                ...state,
                action.expense
            ]
        case "REMOVE_EXPENSE":
            console.log("removing"+action.id)
            return state
        default:
            return state;
    }
}

// Filter Reducer
const filtersReducerDefaultState = {
    text:"",
    sortBy:"date",
    startDate:undefined,
    endDate:undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }))


store.subscribe(()=>{
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({description:"first expense", amount:23}))
const expenseTwo = store.dispatch(addExpense({description:"coffee", amount:3}))
console.log(expenseOne.expense.id);

store.dispatch(removeExpense({id: expenseOne.expense.id}))

const demoState = {
    expenses: [{
        id: "randomuser",
        description: "January Rent",
        note: "Paid in full on time",
        amount: 350,
        creditAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "date", // date or amount
        startDate: undefined,
        endDate: undefined,
    }
}