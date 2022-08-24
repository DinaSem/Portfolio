import React from 'react';
import s from './Contacts.module.scss';
import Title from "../common/component/title/Title";
import st from "../common/styles/Container.module.scss";
import Fade from 'react-reveal/Fade'
import email from '.././assets/image/free-animated-icon-message-6416396.gif'
import telegram from '.././assets/image/telegram.gif'

function Contacts() {
    return (
        <div id='contact' className={s.contactsBlock}>
            <Fade bottom>
            <div className={`${st.container} ${s.contactsContainer}`}>
               <Title text={'Contact'} />

                <h3>Заинтересованы в сотрудничестве?</h3>

                <div className={s.EmailWrapper}>
                    <img src={email} className={s.contactsEmailGif}/>
                    <a href="mailto:">d.r.semenova@yandex.ru</a>
                </div>
                <div className={s.telegramWrapper}>
                    <img src={telegram} className={s.telegramGif}/>
                    <a href='https://t.me/DinaSem'>https://t.me/DinaSem</a>
                </div>


                {/*<form className={s.contactsForm}>*/}
                {/*    <input type="text" className={s.formAria} placeholder={'Your Name'}/>*/}
                {/*    <input type="text" className={s.formAria} placeholder={'Your E-mail'}/>*/}
                {/*    <textarea className={s.messageAria} placeholder={'Your Message'}/>*/}
                {/*    <button type='submit' className={s.submitBtn}>Send Message</button>*/}
                {/*</form>*/}
            </div>
            </Fade>
        </div>
    )
}

export default Contacts;
