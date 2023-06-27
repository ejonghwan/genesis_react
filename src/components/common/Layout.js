import React from 'react';

const Layout = ({ children, name }) => {
    return (
        <section className={name}>
            <h2>{name}</h2>
            {children}
        </section>
    );
};

export default Layout;