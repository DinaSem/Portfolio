import React from 'react';
import s from './Footer.module.scss';
import NavFooter from "../nav/NavFooter";

function Footer() {

    return (
        <div className={s.footer}>
            <NavFooter/>
        </div>
    );
}

export default Footer;

