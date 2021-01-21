import React from "react";
import Option from "./Option.js";



const Options = (props) =>(
        <div>
            <div className="widget-header">
            <div>
            <h3 className="widget-header__title">Options come here as a list below</h3>
            <p className="widget-header__subtitle">there are exactly {props.options.length} options to choose from</p>
            </div>
            <button 
            className="button button--link"
            onClick={props.handleDeleteAllOptions}
            >
            Remove all
            </button>
            </div>
            { props.options.length !== 0 && <div>
                
                {props.options.map((opt, index) => (
                    <Option
                        key={opt}
                        optionText={opt}
                        count={index+1}
                        handleDeleteOption = {props.handleDeleteOption}
                    />
                ))}
            
            </div>}
            { props.options.length === 0 && <p className="widget__message">Add options below to be able to make a choice</p>}

        </div>
)


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

