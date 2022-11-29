import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';
import DetailCard from './components/DetailCard.jsx';
import LandingPage from './components/LandingPage';
import NotFound from './components/NotFound';
import data from './Data.json';
import About from './components/About.jsx';

function App() {

  const [ciudades, setCiudades] = useState([]);
  
    function requestApi(ciudad){
      const {REACT_APP_API_KEY} = process.env
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${REACT_APP_API_KEY}&units=metric`)
      .then(response => response.json())
      .then(info =>  {
        if(info.main !== undefined){
        const newCity = {
          id: info.id,
          state: info.weather[0].description,
          name: info.name,
          temp: info.main.temp,
          minTemp: info.main.temp_min,
          maxTemp: info.main.temp_max,
          wind: info.wind.speed,
          humidity: info.main.humidity,
          icon: `http://openweathermap.org/img/w/${info.weather[0].icon}.png`
        }
        const idCity = ciudades.find(e => e.id === newCity.id)
        if(idCity) return alert('Ciudad ya encontrada')
        else setCiudades(saveCities => [...saveCities,newCity])
        }
        else {
          return alert('No se encontro ningún resultado');
        }
      })
      .catch(error => console.log(error))
    }
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<SearchBar requestApi={requestApi} data={data}/>}>
          <Route index element={<Cards ciudades={ciudades}/>}/>
        </Route> 
        <Route path='/detail/:ciudadId' element={<DetailCard />} />
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
