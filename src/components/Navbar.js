import React from 'react';
import  {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className={"navbar navbar-expand-lg navbar-light fixed-top bg-light navbar-oscuro"}>
                <NavLink to={"/"} className={"navbar-brand"}>
                    <h5 className={"label label-default"}>USJobstats.com</h5>
                </NavLink>
                <button type={"button"} className={"navbar-toggler"} data-toggle={"collapse"} data-target={"#navbarCollapse"}>
                    <span className={"navbar-toggler-icon"}/>
                </button>
                <div className={"collapse navbar-collapse"} id={"navbarCollapse"}>
                    <div className={"navbar-nav"}>
                        <NavLink to={"/"} className={"nav-item nav-link"}>Statistics</NavLink>
                        <NavLink to={"/map"} className={"nav-item nav-link"}>Map</NavLink>
                        <NavLink to={"/about"} className={"nav-item nav-link"}>About</NavLink>
                    </div>
                    {/*<div className={"navbar-nav ml-auto"}>*/}
                    {/*    <p>Put something here</p>*/}
                    {/*</div>*/}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
