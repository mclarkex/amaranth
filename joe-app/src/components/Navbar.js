import React from 'react' ;
import { AiOutlineBars } from "react-icons/ai";
import { Link } from 'react-router-dom' ;

function Navbar() {
    return (
        <div className="navbar">
            <Link to='#' className='menu-bars'>
                <AiOutlineBars/>
            </Link>
        </div>
    )
}

export default Navbar ;