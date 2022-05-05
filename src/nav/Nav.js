import React from 'react';
import s from './Nav.module.scss';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Nav() {
    return (
        <div id='home' className={s.nav}>
            <Link activeClass={s.active}
                  to="home"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={1}
                  duration={500}
                  delay={1000}
                  isDynamic={true}
            > HOME</Link>
            <Link activeClass={s.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={1}
                  duration={500}
                  delay={1000}
                  isDynamic={true}
            > SKILLS</Link>
            <Link activeClass={s.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={1}
                  duration={500}
                  delay={1000}
                  isDynamic={true}
            > PROJECTS</Link>
                <Link activeClass={s.active}
                      to="contacts"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={1}
                      duration={500}
                      delay={1000}
                      isDynamic={true}
                > CONTACT</Link>

        </div>
    );
}

export default Nav;
