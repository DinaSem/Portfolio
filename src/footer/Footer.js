import React from 'react';
import s from './Footer.css';
import Nav from "../nav/Nav";

function Footer() {
    return (

            <div className={s.footer}>
                <div className={s.footerWrapper}>
                    <Nav/>
                </div>

            </div>



    );
}

export default Footer;
