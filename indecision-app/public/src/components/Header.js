import React from "react";


// Header as stateless funktional component
const Header = (props) =>(
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
        </div>
    </div>
)

Header.defaultProps = {
    title: "Indecision App!!!"
}

export {Header as default}


// // Header as component with state
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         )
//     }
// };
