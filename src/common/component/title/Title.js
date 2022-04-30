import React from 'react';
import s from './Title.module.scss';



function Title(props) {
    return (

        <div className={s.projectTitle}>
            <h2>{props.text}</h2>
        </div>
    );
}

export default Title;
