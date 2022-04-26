import React from 'react';
import s from './Skills.module.css';
import st from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${st.container} ${s.skillsContainer}`}>
                <h2 className={s.skillsTitle}>My skills</h2>

                <div className={s.skills}>
                    <Skill title={'Js'} description={'Что-то'}/>
                    <Skill title={'Css'} description={'Что-то'}/>
                    <Skill title={'React'} description={'Что-то'}/>

                    <Skill title={'Redux'} description={'Что-то'}/>
                    <Skill title={'TypeScript'} description={'Что-то'}/>
                    <Skill title={'Formik'} description={'Что-то'}/>
                </div>
            </div>

        </div>
    );
}

export default Skills;
