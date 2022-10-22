import React from 'react'
import Card from './Card.jsx';
import s from './Cards.module.css';

function Cards({ciudades}) {

   if(ciudades){
      return (
         <div className={s.containerCards}>
            {ciudades.reverse().map(e => 
            (<Card
                  key={e.id} 
                  id={e.id}
                  name={e.name}
                  temp={e.temp}
                  minTemp={e.minTemp}
                  maxTemp={e.maxTemp}
                  wind={e.wind}
                  humidity={e.humidity}
                  icon={e.icon}
                  state={e.state}
            />)
         )}
         </div>
   )
   } else {
   return(
      <div><h2>Sin ciudades</h2></div>
   )
   }
      
}

export default Cards