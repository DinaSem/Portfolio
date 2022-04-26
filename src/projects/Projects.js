import React from 'react';
import s from './Projects.module.css';
import st from '../common/styles/Container.module.css'
import Project from "./project/Project";


function Projects() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${st.container} ${s.skillsContainer}`}>
                <h2 className={s.skillsTitle}>My projects</h2>
                <div className={s.skills}>
                    <Project title={'Project #1'} description={'Что-то'}/>
                    <Project title={'Project #2'} description={'Что-то'}/>
                    <Project title={'Project #3'} description={'Что-то'}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;
