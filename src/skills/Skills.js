import React from 'react';
import s from './Skills.module.scss';
import st from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/component/title/Title";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${st.container} ${s.skillsContainer}`}>
                <Title text={'Skills'} />

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
