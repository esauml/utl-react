import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ }) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
                {/* Params */}
                <li>
                    <NavLink to="/users/1">User 1</NavLink>
                </li>
                <li>
                    <NavLink to="/redirect">Redirect</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default memo(NavBar);