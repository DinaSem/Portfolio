import React from 'react';
import s from './Nav.module.scss';
import {Link, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'


function Nav() {
    return (
        <div  className={s.nav}>
            <Link activeClass={s.active}
                  to="home"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-100}
                  duration={500}
                  delay={1000}
                  isDynamic={true}
            > HOME</Link>
            <Link activeClass={s.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-100}
                  duration={500}
                  delay={1000}
                  isDynamic={true}
            > SKILLS</Link>
            <Link activeClass={s.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-75}
                  duration={500}
                  delay={1000}
                  isDynamic={true}
            > PROJECTS</Link>
            <Link activeClass={s.active}
                  to="contact"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-75}
                  duration={500}
                  delay={1000}
                  isDynamic={true}
            > CONTACT</Link>

        </div>
    );
}

export default Nav;
