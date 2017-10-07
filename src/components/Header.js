import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <NavLink exact className="item" to="/" activeClassName="active">home</NavLink>
            <NavLink className="item" to="/about" activeClassName="active">about</NavLink>
            <NavLink className="item" to="/posts" activeClassName="active">posts</NavLink>
            <NavLink className="item" to="/me" activeClassName="active">me</NavLink>
            <NavLink className="item" to="/login" activeClassName="active">login</NavLink>
        </div>
    );
};

export default Header