import React from 'react';
import s from './Projects.module.scss';
import st from '../common/styles/Container.module.scss'
import Project from "./project/Project";
import Title from "../common/component/title/Title";
import todoImage from "./../assets/image/todolist.jpg"
import cards from "./../assets/image/cardProject.jpg"
import moviesImage from "./../assets/image/movies.jpg"
import Fade from 'react-reveal/Fade'

function Projects() {
    const todo = {
        backgroundImage: `url(${todoImage})`
    }
    const card = {
        backgroundImage: `url(${cards})`
    }
    const movies = {
        backgroundImage: `url(${moviesImage})`
    }
    return (
        <div id='projects' className={s.projectBlock}>
            <Fade bottom>
                <div className={`${st.container} ${s.projectContainer}`}>
                    <Title text={'Projects'}/>
                    <div className={s.projects}>
                        <Project style={todo} title={'Todo-list'}
                                 href={'https://dinasem.github.io/Todolist/#/'}
                                 description={'TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, Axios, Mui, Formik, Storybook; Bug fixing, deploying; Covering code with unit tests.'}/>
                        <Project style={movies} title={'Movies'} description={'Movies'}
                                 href={'https://dinasem.github.io/Movies_project-master/'}
                                 description={'TypeScript, React, Redux, Redux-thunk, Router-dom, Axios, Mui for some component, CSS; Bug fixing, deploying.'}/>
                        <Project style={card} title={'Cards'}
                                 href={'https://dinasem.github.io/CardsProject/'}
                                 description={'TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, Axios, Mui for some component, SCSS, Formik; Bug fixing, deploying.'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
