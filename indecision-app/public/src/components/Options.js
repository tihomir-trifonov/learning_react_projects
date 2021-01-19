import React from "react";
import Option from "./Option.js";



const Options = (props) => {
    return (
        <div>
            <p>Options come here as a list below</p>
            <p>there are exactly {props.options.length} options to choose from</p>
            <ul>
                {props.options.map((opt) => (
                    <Option
                        key={opt}
                        optionText={opt}
                        handleDeleteOption = {props.handleDeleteOption}
                    />
                ))}
            </ul>
            { props.options.length === 0 && <p>Add options below to be able to make a choice</p>}
            <button onClick={props.handleDeleteAllOptions}>Remove all</button>
        </div>
    )
}

export {Options as default}

// // Options as class component with state
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>Options come here as a list below</p>
//                 <p>there are exactly {this.props.options.length} options to choose from</p>
//                 <ul>
//                     {this.props.options.map((opt) => <Option key={opt} optionText={opt} />)}
//                 </ul>
//                 <button onClick={this.props.handleDeleteAllOptions}>Remove all</button>
//             </div>
//         )
//     }
// }

