import React from 'react';
import s from './Main.module.css'
import st from '../common/styles/Container.module.css'

function Main() {
    return (
        <div className={s.main}>
            <div className={st.container}>
                <div className={s.photo}>

                </div>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I'm Dina</h1>
                    <p> Frontend Developer</p>
                </div>
            </div>

        </div>
    );
}

export default Main;
