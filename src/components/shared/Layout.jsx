import React from 'react';
import useLenis from '../../hooks/useLenis';
import Cursor from '../Cursor/Cursor';

const Layout = ({ children }) => {
    useLenis();
    
    return (
        <>
            <Cursor />
            {children}
        </>
    );
};

export default Layout;