import React from "react";

const Option = (props) => {

    return (
        <p>
            <li>{props.optionText}
                <button
                    onClick={(e) => { props.handleDeleteOption(props.optionText) }}
                >Remove</button>
            </li>
        </p>
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

