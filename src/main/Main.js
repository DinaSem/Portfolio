import React from 'react';
import s from './Main.module.scss'
import st from '../common/styles/Container.module.scss'
import myPhoto from "../assets/image/MyPhoto.jpg";

function Main() {
    const photo={
        backgroundImage: `url(${myPhoto})`
    }
    return (
        <div className={s.main}>
            <div className={st.container}>
                {/*<div className={s.sicle}>*/}
                    <div style={photo} className={s.photo}>
                {/*</div>*/}

                </div>
                <div className={s.text}>
                    <span className={s.bigText}>Hello, my name is</span>
                    <h1>Dina semenova</h1>
                    <p> Frontend Developer</p>
                </div>
            </div>

        </div>
    );
}

export default Main;
