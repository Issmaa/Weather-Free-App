import React from 'react'
import s from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className={s.containerNav}>
        <Link to={'/home'}><h1 className={s.title}>Weather Free</h1> </Link>
        <Link to={'/about'} className={s.about}>About</Link>
    </nav>
  )
}

export default Nav