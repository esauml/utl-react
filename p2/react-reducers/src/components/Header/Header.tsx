import React from "react";

export interface HeaderInterface { }

const Header = ({ }: HeaderInterface) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <h1 className="navbar-brand">Agenda react + Reducer</h1>
            </div>
        </nav>
    )
};

export default Header;
