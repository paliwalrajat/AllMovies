import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/" style={{textDecoration: "none"}}><span>Movies</span></Link>
                <Link to="/my-favourite" style={{textDecoration: "none"}}><span>My Favourites </span></Link>
            </div>
        </div>
    );
};

export default Header;