import React from 'react'
import { Link } from 'react-router-dom'
import s from './LandingPage.module.css';
import cloud2 from "../images/cloud3.png"
function LandingPage() {
  return (
    <div>
      <div className={s.container}>
        <div>
        <h1 className={s.title}>Weather App</h1>
        </div>
        <div> 
          <img src={cloud2} alt="cloud2" className={s.image}/>
        </div>
      <div className={s.btn}>
        <Link to='/home'><button>Home</button></Link>
      </div>
      </div>
    </div>
  )
}

export default LandingPage