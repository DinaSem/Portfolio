import React from 'react';
import s from './NavFooter.module.scss';


function NavFooter() {
    return (
            <div className={s.nav}>
                <a href="mailto:d.r.semenova@yandex.ru">email</a>
                <a href="https://github.com/DinaSem">github</a>
                <a href="https://www.linkedin.com/in/%D0%B4%D0%B8%D0%BD%D0%B0-%D1%81%D0%B5%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0-85bbba87/">linked</a>
                <a href="https://t.me/DinaSem">telegram</a>
        </div>

    );
}

export default NavFooter;
