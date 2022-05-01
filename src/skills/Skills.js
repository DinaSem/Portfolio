import React from 'react';
import s from './Skills.module.scss';
import st from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/component/title/Title";
import style from './skill/Skill.module.css';

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${st.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>

                <div className={s.skills}>
                    <div>
                        <Skill title={'Js/TypeScript'} percent={'86%'} style={style.javascript}/>
                        <Skill title={'React/Redux'} percent={'75%'} style={style.react}/>
                        <Skill title={'Redux-Thunk/Formik'} percent={'70%'} style={style.redux}/>
                    </div>
                    <div>
                        <Skill title={'Axios/Rest API'} percent={'80%'} style={style.axios}/>
                        <Skill title={'HTML/SCSS'} percent={'100%'} style={style.html}/>
                        <Skill title={'GIT/Photoshop/Figma'} percent={'90%'} style={style.git}/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Skills;
