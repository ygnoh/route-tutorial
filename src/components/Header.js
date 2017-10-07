import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <Link className="item" to="/">home</Link>
            <Link className="item" to="/about">about</Link>
        </div>
    );
};

export default Header