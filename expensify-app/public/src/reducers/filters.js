import moment from "moment";

// Filter Reducer
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("M"),
    endDate: moment().endOf("M")
};
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            // return state.map((expense) => ({...expense,...action.text}))
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.date
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state
    }
}
