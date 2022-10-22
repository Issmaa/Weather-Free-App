import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import Loading from './Loading.jsx';
import c from './DetailCard.module.css';
import Nav from '../components/Nav.jsx'
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
function DetailCard() {
  
  const {ciudadId} = useParams();
  
  const [ciudad,setCiudad] = useState([])

  useEffect(() => {
    const {REACT_APP_API_KEY} = process.env
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${ciudadId}&appid=${REACT_APP_API_KEY}&units=metric`
   fetch(url)
   .then(response => response.json())
   .then(data => {
     const detailCity = {
       name: data.name,
       country: data.sys.country,
       temp: data.main.temp,
       feel: data.main.feels_like,
       tempMin: data.main.temp_min,
       tempMax: data.main.temp_max,
       humidity: data.main.humidity,
       weather: data.weather[0].main,
       weatherDescription: data.weather[0].description,
       icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
       wind: data.wind.speed,
       latitud: data.coord.lat,
       longitud: data.coord.lon,

     }
     setCiudad(detailCity)
    //  if(ciudad.weatherDescription.includes('clouds')){
    //   setImageWeather(bck4);
    //  }
    //  if(ciudad.weatherDescription.includes('clear')){
    //   setImageWeather(bck1);
    //  }
   },[]) 


 },[])

console.log(ciudad)
  if(Object.keys(ciudad).length){
    return(
      <div className="ciudad">
        <Nav/>
        <div className={c.container}>

          <div className={c.nameCity}>
            <h2>{ciudad.name}</h2>
            <div className={c.country}>{ciudad.country ? ciudad.country : 'c'}</div>
          </div>
          
          <div className={c.containerPrincipalInfo}>
            <div className={c.temp}>
              <div>{Math.round(ciudad.temp)}ºC</div>
            </div>
            <div className={c.containerMinMax}>
            <img src={ciudad.icon} alt={ciudad.name} className={c.image}/>
            <div className={c.type}>{ciudad.weather}</div>
            <div className={c.minMax}>
              <div className={c.min}>min: {Math.round(ciudad.tempMin)} ºC</div>
              <div className={c.max}>max: {Math.round(ciudad.tempMax)} ºC</div>
            </div>
            </div>
          </div>

          <div className={c.containerPlusInfo}>
            <div className={c.spacing}><span>Feel: {ciudad.feel}ºC</span></div>
            <div className={c.spacing}><span className={c.info}><OpacityIcon /> {ciudad.humidity} %</span></div>
            <div className={c.spacing}><span className={c.info}><AirIcon/>{ciudad.wind} km/h</span></div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return(
      <Loading/>
    )
  }
}

export default DetailCard