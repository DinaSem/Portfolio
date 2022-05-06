import React from 'react';
import s from './Header.module.css'
import Nav from "../nav/Nav";
import StickyHeader from 'react-sticky-header';

function Header() {

    return (
                <div className={s.header}>
                    <Nav/>
                </div>
    );
}

export default Header;
