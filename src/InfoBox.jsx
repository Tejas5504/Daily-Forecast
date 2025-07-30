import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css"; 

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1528157509193-8254fac59543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3ZlcmNhc3QlMjBjbG91ZGV8ZW58MHx8MHx8fDA%3D"

    const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1438449805896-28a666819a20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="InfoBox">
            <div className='CardContiner'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>80
                    ? RAIN_URL
                    :info.temp>15
                    ? HOT_URL 
                    :COLD_URL }
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city }{info.humidity>80
                    ? <ThunderstormIcon/>
                    :info.temp>15
                    ? <SunnyIcon/>
                    : <AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temprature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}&deg;C</p>
                <p>Min Temprature = {info.tempMin}&deg;C</p>
                <p>Max Temprature = {info.tempMax}&deg;C</p>
                <p>The Wather can be describe as <i>{info.weather}</i> and feels like  = {info.feelsLike}&deg;C</p>
                
                </Typography>
            </CardContent>
            
            </Card>
    </div>
    </div>
    )
}