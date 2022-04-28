import React from 'react';
import s from './Contacts.module.css';
import Title from "../common/styles/components/title/Title";



function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${s.container}`}>
               <Title text={'Contacts'} />
                <form className={s.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                    <button type='submit' className={s.submitBtn}>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;
