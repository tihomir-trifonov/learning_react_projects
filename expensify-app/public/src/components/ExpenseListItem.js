import React from "react";
import {Link} from "react-router-dom";
import moment from "moment"



const ExpenseListItem = (props) => (
    <div>
        <Link to={"./edit/" + props.id}>
            <h3>{props.description}</h3>
        </Link>
        <p>Amount of {props.amount} created on {props.createdAt}</p>
    </div>
)

export default  ExpenseListItem

