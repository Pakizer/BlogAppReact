import React from "react"
import "./navbar.css"

const Navbar = (props) => {
    return(
        <div>
         <div class="nav-scroller py-1 mb-2">
            <nav class="nav d-flex justify-content-between">
                <a className="p-2 text" href="#">{props.text}</a>
            </nav>
        </div>
        </div>
    )

}
export default Navbar