import React from 'react'
import {Link} from 'react-router-dom';
import s from './Card.module.css';

function Card({id,name,temp,icon,state}) {
  return (
    <div className={s.container}>
      <h2>{name}</h2>
      <h2 className={s.temp}>{Math.floor(temp)}°C</h2>
      <img src={icon} alt={name}/>
      <p>{state}</p>
      <Link to={`/detail/${id}`}>
        <button className={s.btnToDetail}><span>Detail</span></button>
      </Link>
    </div>
  )
}

export default Card