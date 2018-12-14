import React from 'react';
// import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li>
                <a href='/' className="nav-item nav-item--active">
                    <i className="fa fa-home"/> Accueil
                </a>
            </li>
            <li>
                <a href='/my-tweets' className="nav-item">
                    <i className="fa fa-bell-o"/> Mes tweets
                </a>
            </li>
        </ul>
    </nav>
);

export default Nav;
