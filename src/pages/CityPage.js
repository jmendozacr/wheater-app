import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
import WeatherDetail from './../components/WeatherDetail';
import ForecastChart from './../components/ForecastChart';
import ForeCast from './../components/Forecast';
import AppFrame from './../components/AppFrame';

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
];

const forecastItems = [
    { hour: 12, state: "clouds", weekday: "Friday", temperature: 29 },
    { hour: 13, state: "clear", weekday: "Monday", temperature: 9 },
    { hour: 14, state: "rain", weekday: "Sunday", temperature: 46 },
    { hour: 15, state: "snow", weekday: "Thursday", temperature: 3 },
    { hour: 16, state: "drizzle", weekday: "Thursday", temperature: 21 },
    { hour: 17, state: "thunderstorm", weekday: "Thursday", temperature: 14 },
];

const CityPage = () => {
    const { city, countryCode } = useParams();
    const [data, setData] = useState(null);
    const [forecastItemList, setForecastItemList] = useState(null);

    const country = "Costa Rica",
       state   = "snow",
       temperature = 23,
       humidity = 80,
       wind    = 20;

    useEffect(() => {

        const getForecast = async () => {
            const id = "dc2da2d33c522744fa9b2f5a99b74e23";
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${id}`;
            try {
                const { data } = await axios.get(url);
                const daysAhead = [0, 1, 2, 3, 4, 5];
                const days = daysAhead.map(d => moment().add(d, "d"));
                const dataAux = days.map(d => {
                    return({
                        dayHour: d.format("ddd"),
                        min: 14,
                        max: 22, 
                    });
                });

                console.log("dataAux", dataAux);

                setData(dataAux);
                setForecastItemList(forecastItems);
            } catch (error) {
                console.log(error);
            }
        }

        getForecast();
    }, [city, countryCode]);

    return (
        <AppFrame>
            <Grid container 
                justify="space-around"
                direction="column"
                spacing={2}>
                <Grid container item 
                    xs={12}
                    justify="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid container item 
                    xs={12}
                    justify="center">
                    <Weather state={state} temperature={temperature} />
                    <WeatherDetail humidity={humidity} wind={wind} />
                </Grid>
                <Grid item>
                    {
                        data && <ForecastChart data={data}/>
                    }
                </Grid>
                <Grid item>
                    {
                        forecastItemList && <ForeCast forecastItemList={forecastItemList}/>
                    }
                </Grid>
            </Grid>
        </AppFrame>
    );
}

export default CityPage;
