import moment from "moment"

const expenses = [{
    id: "1", 
    description: "gum",
    note:"",
    amount: 195,
    createdAt: 0
},{
    id: "2", 
    description: "rent",
    note:"",
    amount: 19500,
    createdAt: moment(0).subtract(4, "days").valueOf()
},{
    id: "3", 
    description: "crEdit card",
    note:"",
    amount: 500,
    createdAt: moment(0).add(4, "days").valueOf()
}]

export default expenses