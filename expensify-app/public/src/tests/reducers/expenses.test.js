import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"
import moment from "moment"

const demoExpense=[
{    expenses: {
        id: 1, 
        description: "gum",
        note:"",
        amount: 195,
        createdAt: 0
    }}
]

test("set expense default state", ()=>{
    const state = expensesReducer(undefined, {type:"@@INIT"})
    expect(state).toEqual([])
})

test("remove item based on id", ()=>{
    const result = expensesReducer(expenses, {type:"REMOVE_EXPENSE",id:"1"});
    expect(result).toEqual([expenses[1],expenses[2]])
})

test("not remove item based on id not found", ()=>{
    const result = expensesReducer(expenses, {type:"REMOVE_EXPENSE",id:"4"});
    expect(result).toEqual([expenses[0],expenses[1],expenses[2]])
})

test("add new expense", ()=>{
    const newExpense = {
        id: "4", 
        description: "more rent",
        note:"note",
        amount: 295,
        createdAt: 0
    }
    const result = expensesReducer(expenses,{
        type:"ADD_EXPENSE",
        expense:newExpense
    })
    expect(result).toEqual( [...expenses, newExpense])
})

test("edit an existing expense", ()=>{
    const result = expensesReducer(expenses, {
        type:"EDIT_EXPENSE",
         id:"2",
         updates:{note:"new notes"}})
    expect(result[1].note).toBe("new notes")

})

test("not edit a non existing expense", ()=>{
    const result = expensesReducer(expenses, {
        type:"EDIT_EXPENSE",
         id:"-1",
         updates:{note:"new notes"}})
    expect(result).toEqual(expenses)

})