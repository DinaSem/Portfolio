import React from 'react';
import s from './Projects.module.css';
import st from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/styles/components/title/Title";
import todoImage from "./../assets/image/ToDoList.png"
import socialImage from "./../assets/image/socialnet.jpg"

function Projects() {
    const todo={
        backgroundImage: `url(${todoImage})`
    }
    const social={
        backgroundImage: `url(${socialImage})`
    }
    return (
        <div className={s.projectBlock}>
            <div className={`${st.container} ${s.projectContainer}`}>
                   <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project style={social} title={'Социальная сеть'} description={'Социальная сеть'}/>
                    <Project style={todo} title={'Todo-list'} description={'Todo-list'}/>
                    <Project title={'Project #3'} description={'Что-то'}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;
