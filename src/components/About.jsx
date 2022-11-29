import React from 'react'
import s from './About.module.css';
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import Nav from './Nav.jsx'
function About() {
  return (
    <div>
        <Nav/>
        <div className={s.aboutContainer}>
        <p>Hola, mi nombre es Ismael Hernandez, soy un desarrollador apasionado por crear aplicaciones web, construir grandes proyectos y aportar valor. Me interesa el desarrollo mobile, aplicaciones web y la inteligencia artificial.  </p>
        <h3>Stack de tecnologias: </h3>
        <ul className={s.stackList}>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Nodejs</li>
            <li>Sequelze</li>
            <li>Boostrap</li>
            <li>SQL</li>
        </ul>
        <div className={s.socialMedia}>
        <a href="https://www.linkedin.com/in/ismael-hern%C3%A1ndez-46b09523a/" className={s.linkedin}>
          <img src={linkedin} alt="linkedin"/>
        </a>
        <a href="https://github.com/Issmaa" className={s.git}>
          <img src={github} alt="github"/>
        </a>
        </div>
      </div>
      </div>
  )
}

export default About