import React from 'react';
import s from './Contacts.module.scss';
import Title from "../common/component/title/Title";
import st from "../common/styles/Container.module.scss";



function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${st.container} ${s.contactsContainer}`}>
               <Title text={'Contacts'} />
                <form className={s.contactsForm}>
                    <input type="text" className={s.formAria} placeholder={'Name'}/>
                    <input type="text" className={s.formAria} placeholder={'e-mail'}/>
                    <textarea className={s.messageAria} placeholder={'Message'}/>
                    <button type='submit' className={s.submitBtn}>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;
