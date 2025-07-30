import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WheaterApp(){
    const [weatherinfo,setWeatherInfo] = useState({
        city:"Dhule",
        feelsLike: 39.07,
        humidity: 54,
        temp: 33.69,
        tempMax:33.69,
        tempMin:33.69,
        weather: "overcast clouds",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center" }}>
            <h1 style={{ color: "#0077b6" }}><b>** Daily Forecast **</b></h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    );
}