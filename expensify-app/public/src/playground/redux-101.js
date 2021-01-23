import { createStore } from "redux"

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy: decrementBy
})

const setCount = ({ count } = {}) => ({
    type: "SET",
    count
})

const resetCount = () => ({
    type: "RESET",
    count:0
})


//  ---------------REDUCERS---------------  //

const countReducer = (state = { count: 0 }, action) => {
    // console.log("Running store")
    switch (action.type) {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            };
        case "RESET":
            return {
                count: 0
            };
        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            };
        case "SET":
            return {
                count: action.count
            };
        default:
            return state;
    }
}


const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

unsubscribe()