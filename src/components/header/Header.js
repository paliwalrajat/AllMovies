import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/" style={{textDecoration: "none"}}><span>MOVIES</span></Link>
                <Link to="/my-favourite" style={{textDecoration: "none"}}><span>MY FAVOURITE </span></Link>
            </div>
        </div>
    );
};

export default Header;