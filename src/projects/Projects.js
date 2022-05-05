import React from 'react';
import s from './Projects.module.scss';
import st from '../common/styles/Container.module.scss'
import Project from "./project/Project";
import Title from "../common/component/title/Title";
import todoImage from "./../assets/image/todolist.jpg"
import socialImage from "./../assets/image/soc.png"
import Fade from 'react-reveal/Fade'

function Projects() {
    const todo = {
        backgroundImage: `url(${todoImage})`
    }
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    return (
        <div className={s.projectBlock}>
            <Fade top>
                <div className={`${st.container} ${s.projectContainer}`}>

                    <Title text={'Projects'}/>

                    <div className={s.projects}>
                        <Project style={social} title={'Social network'}
                                 description={'TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, Axios, Mui for some component, SCSS, Formik; Bug fixing, deployin.'}/>
                        <Project style={todo} title={'Todo-list'}
                                 description={'TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, Axios, Mui, Formik, Storybook; Bug fixing, deployin; Covering code with unit tests.'}/>
                        <Project title={'Project #3'} description={'In progress'}/>
                    </div>

                </div>
            </Fade>
        </div>
    );
}

export default Projects;
