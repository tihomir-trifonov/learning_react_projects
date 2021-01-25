console.log("high order components")

/* A Higher Order Component (HOC) is a component that renders other components */

import React from "react"
import ReactDOM from "react-dom"

const Info = (props) => (
    <div>
        <h1>Hello React</h1>
        <p>The info from props is : {props.info}</p>

    </div>
)

const withAdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
        <WrappedComponent {...props}/>
            <p>Admin WARNING - do not ignore</p>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return  (props) =>(
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <h1>Log in</h1>
            )}
        </div>
        )
    }



const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="thingie given as a prop"/>,document.getElementById("app"))
// ReactDOM.render(<AdminInfo isAdmin={true} info="thingie given as a prop"/>,document.getElementById("app"))