import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';  
import Button from '@mui/material/Button';
import "./SearchBox.css"  
import { useState } from 'react';
export default function SearchBox({updateInfo}){
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY= "3396c5ff4e205b6fb6858d09ca3ca9c5";

  let getWhetherInfo = async ()=>{
    try{
    let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponce = await responce.json();
    console.log(jsonResponce);
    let result ={
      city:city,
      temp: jsonResponce.main.temp,
      tempMax: jsonResponce.main.temp_max,
      tempMin: jsonResponce.main.temp_min,
      humidity: jsonResponce.main.humidity,
      feelsLike: jsonResponce.main.feels_like,
      weather: jsonResponce.weather[0].description,

    }
    console.log(result);
    return result;
  }catch(err){
    throw err;
  }
  };
    let handelChang= (evt)=>{
      setCity(evt.target.value);
    };

    let handelSubmit= async (evt) =>{
      try{
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWhetherInfo(); 
      updateInfo(newInfo)
      }catch(err){
        setError(true);
      }
    };
    return (
    <div className='SearchBox'>
    <form onSubmit={handelSubmit}>
        <TextField id="city" 
        label="City Name"
        variant="outlined"
        required value={city}
        onChange={handelChang}/>
        <br />
        <br />
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
        Send
      </Button>
      {error && <p style={{color:"red"}}>No such place exists!!</p>}
    </form>
    </div>
    );
}