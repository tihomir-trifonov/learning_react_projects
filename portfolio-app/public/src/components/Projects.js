import React from "react"


const Projects =(props)=>{
    console.log(props);
    return (
        <div>Projects: {props.match.params.id}</div>)
}

export default Projects