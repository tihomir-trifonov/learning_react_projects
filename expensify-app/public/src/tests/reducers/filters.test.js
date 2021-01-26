import moment from "moment"
import filtersReducers from "../../reducers/filters"

test("should setup default filter values", ()=>{
    const state = filtersReducers(undefined, {type: "@@INIT"});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("M"),
        endDate: moment().endOf("M")
    })
})

test("should setup filter to sort by amount", ()=>{
    const state = filtersReducers(undefined, {type: "SORT_BY_AMOUNT"});
    expect(state).toEqual({
        text: "",
        sortBy: "amount",
        startDate: moment().startOf("M"),
        endDate: moment().endOf("M")
    })
})

test("should setup filter to sort by date", ()=>{
    const state0 = filtersReducers(undefined, {type: "SORT_BY_AMOUNT"});
    const state1 = filtersReducers(state0, {type: "SORT_BY_DATE"});
    expect(state1).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("M"),
        endDate: moment().endOf("M")
    })
})

test("should setup filter with start date", ()=>{
    const state = filtersReducers(undefined, {type: "SET_START_DATE", date: moment(0)});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment(0),
        endDate: moment().endOf("M")
    })
})
test("should setup filter with start date", ()=>{
    const state = filtersReducers(undefined, {type: "SET_END_DATE", date: moment(0)});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("M"),
        endDate: moment(0)
    })
})

test("should setup filter with start and end date", ()=>{
    const state0 = filtersReducers(undefined, {type: "SET_START_DATE", date: moment(0)});
    const state1 = filtersReducers(state0, {type: "SET_END_DATE", date: moment(0)});
    expect(state1).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment(0),
        endDate: moment(0)
    })
})

test("should setup filter to search text", ()=>{
    const state = filtersReducers(undefined, {type: "SET_TEXT_FILTER", text:"search this"});
    expect(state).toEqual({
        text: "search this",
        sortBy: "date",
        startDate: moment().startOf("M"),
        endDate: moment().endOf("M")
    })
})