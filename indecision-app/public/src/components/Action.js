import React from "react";


const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What shoud I do
            </button>
        </div>)
}

export {Action as default}



// // Action as class component with state
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What shoud I do
//                 </button>
//             </div>
//         )
//     }
// }