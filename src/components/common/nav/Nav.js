import React, { forwardRef, useImperativeHandle } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navData } from '../data/MenuData';

const Nav = ({ className }) => {
    const active = 'on';
    
    return (
        <ul className={className}>
            {navData.map((menu, idx) => (
                <li key={idx}>
                    <NavLink to={menu.link} activeClassName={active}>{menu.content}</NavLink>
                </li>
                )
            )}
        </ul>
    );
}
export default Nav;