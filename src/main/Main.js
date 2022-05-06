import React from 'react';
import s from './Main.module.scss'
import st from '../common/styles/Container.module.scss'
import myPhoto from "../assets/image/MyPhoto.jpg";
import ReactTypingEffect from 'react-typing-effect';

function Main() {
    const photo = {
        backgroundImage: `url(${myPhoto})`
    }
    return (
        <div id='home' className={s.main}>
            <div className={st.container}>
                <div style={photo} className={s.photo}></div>
                <div className={s.text}>
                    <span className={s.bigText}>Hi, I am</span>
                    <h1>Dina semenova</h1>
                    <p>
                        <ReactTypingEffect speed={100} text={['Front end Developer']}/>
                    </p>

                </div>
            </div>

        </div>
    );
}

export default Main;
