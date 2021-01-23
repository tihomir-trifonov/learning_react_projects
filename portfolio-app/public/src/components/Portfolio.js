import React from "react"
import {Link} from "react-router-dom";

const Portfolio = (props) =>  {
    console.log(props);
    return (
        <div>
        <h4>
        Projects:
        </h4>
        <Link to="/portfolio/1">Proj 1</Link>
        <Link to="/portfolio/2">Proj 2</Link>
        </div>)
}


export default Portfolio