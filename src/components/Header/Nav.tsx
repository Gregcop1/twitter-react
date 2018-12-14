import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li>
                <NavLink to='/' className="nav-item" activeClassName="nav-item--active" exact>
                    <i className="fa fa-home"/> Accueil
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-tweets' className="nav-item" activeClassName="nav-item--active" exact>
                    <i className="fa fa-bell-o"/> Mes tweets
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Nav;
