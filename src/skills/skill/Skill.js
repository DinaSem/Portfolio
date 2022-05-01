import React from 'react';
import s from './Skill.module.css';


function Skill(props) {

    return (
        <div className={s.skill}>
            {/*<div className={s.icon}></div>*/}
            {/*<h3>{props.title}</h3>*/}
            {/*<span className={s.description}>{props.description}</span>*/}


            <div className={s.skills}>
                <h2>{props.title}</h2>
                <div className={s.progressBar}>
                    <div className={props.style}><span>{props.percent}</span></div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
