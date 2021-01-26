import {addExpense, editExpense, removeExpense} from "../../actions/expenses"

test("set up remove expense action object", ()=>{
    const action = removeExpense({id: "123abc"})
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id:"123abc"
    })
})

test("set up edit expense action object", ()=>{
    const action = editExpense("123abc", {text: "some text"})
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id:"123abc",
        updates:{
            text: "some text"
        }
    })
})

test("set up add new expense action object - new values", ()=>{
    const expenseData={
        description: "new description",
        note: "new note",
        amount: 123456,
        createdAt: 987654321
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test("set up add new expense action object - default values", ()=>{
    const action = addExpense()
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense:{
            description:"",
            note:"",
            amount:0,
            createdAt:0,
            id: expect.any(String)
        }
        
    })
})