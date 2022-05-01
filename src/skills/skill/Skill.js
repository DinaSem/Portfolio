import React from 'react';
import s from './Skill.module.css';


function Skill(props) {
    return (
        <div className={s.skill}>
            {/*<div className={s.icon}></div>*/}
            {/*<h3>{props.title}</h3>*/}
            {/*<span className={s.description}>{props.description}</span>*/}


            <div className={s.skills}>
                <h2>HTML</h2>
                <div className={s.progressBar}>
                    <div className={s.html}><span>86%</span></div>
                </div>
                <h2>CSS</h2>
                <div className={s.progressBar}>
                    <div className={s.css}><span>95%</span></div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
