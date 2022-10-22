import React,{useState} from 'react'
import { Outlet } from 'react-router-dom';
import s from './SearchBar.module.css';
import Nav from './Nav';
import AddIcon from '@mui/icons-material/Add';
function SearchBar({requestApi,data}) {

  const [word,setWord] = useState('')
  
  const [filteredData,setFilteredData] = useState([]);
  
  function onSubmit(e){
    e.preventDefault();
    if(!word) return alert('Campo vacío!, porfavor ingresa alguna ciudad');
    else {
      requestApi(word);
      setWord('');
      setFilteredData([])
    }
  }

  function leerInput(e) {
    const searchWord = e.target.value;
    setWord(searchWord)
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if(word === "" || searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
      
    }
  }

  function addName(e) {
    e.preventDefault();
    setWord(e.target.value)
    setFilteredData([])
  }

  return (
    <>
        <div>
          <Nav/>
        </div>
    <div className={s.container}>
        <div className={s.containerSearch}>
          <form onSubmit={(e) => onSubmit(e)}>  

          <input
            type="text"
            placeholder="City..."
            onChange={leerInput}
            value={word}
            className={s.searchBar}
          />
    
            <input 
            type="submit" 
            value={'+'}
            onClick={onSubmit}
            className={s.btnSearch}
            />
    
        </form>
      </div>
      {filteredData.length !== 0 && (
      <div className={s.dataResult}>
        {filteredData.slice(0,15).map((value,key) => {
          return <div key={key} className={s.dataItem}><button onClick={addName} value={value.name}>{value.name}</button></div>
        })}
      </div>
      )}
    <Outlet/>
    </div>
    </>
  )
}

export default SearchBar
