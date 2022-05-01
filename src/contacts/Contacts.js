import React from 'react';
import s from './Contacts.module.scss';
import Title from "../common/component/title/Title";
import st from "../common/styles/Container.module.scss";



function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${st.container} ${s.contactsContainer}`}>
               <Title text={'Contact'} />
                <form className={s.contactsForm}>
                    <input type="text" className={s.formAria} placeholder={'Your Name'}/>
                    <input type="text" className={s.formAria} placeholder={'Your E-mail'}/>
                    <textarea className={s.messageAria} placeholder={'Your Message'}/>
                    <button type='submit' className={s.submitBtn}>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;
