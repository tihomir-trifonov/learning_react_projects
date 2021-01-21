import React from "react";

const Option = (props) => {

    return (
        <div className="option">
        <p className="option__text">
        {props.count+".   "}{props.optionText}
        </p>
        <button
            className="button button--link"
            onClick={(e) => { props.handleDeleteOption(props.optionText) }}
            >X</button>
        </div>
    )
}

export {Option as default}



// // Option as class component with state
// class Option extends React.Component {
//     render() {
//         return (
//             <li>{this.props.optionText}</li>
//         )
//     }
// }




/* 
    Stateless functional component
*/
// const User = (props)=>{
//     return(
//         <div>
//         <p>Name: {props.name}</p>
//         </div>
//     )
// }

