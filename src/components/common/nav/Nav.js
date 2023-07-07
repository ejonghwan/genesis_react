import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = ({ className }) => {
    const active = 'on';
    return (
        <ul className={className}>
            <li>
                <NavLink to='/gallery' activeClassName={active}>
                    Gallery
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact' activeClassName={active}>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to='/youtube' activeClassName={active}>
                    Youtube
                </NavLink>
            </li>
            <li>
                <NavLink to='/member' activeClassName={active}>
                    Members
                </NavLink>
            </li>
            <li>
                <NavLink to='/community' activeClassName={active}>
                    Community
                </NavLink>
            </li>
        </ul>
    );
};

export default Nav;