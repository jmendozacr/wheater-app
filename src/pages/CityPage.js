import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CityInfo from './../components/CityInfo';
import Wheater from './../components/Wheater';
import WheaterDetail from './../components/WheaterDetail';
import ForecastChart from './../components/ForecastChart';
import ForeCast from './../components/Forecast';

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
    { weekday: "Friday", hour: 12, state: "cloud", temperature: 29 },
    { weekday: "Monday", hour: 12, state: "cloud", temperature: 29 },
    { weekday: "Monday", hour: 12, state: "cloud", temperature: 29 },
    { weekday: "Sunday", hour: 12, state: "cloud", temperature: 29 },
    { weekday: "Thursday", hour: 12, state: "cloud", temperature: 29 },
    { weekday: "Thursday", hour: 12, state: "cloud", temperature: 29 },
];

const CityPage = props => {
    const city = "San José",
       country = "Costa Rica",
       state   = "cloudy",
       temperature = 23,
       humidity = 80,
       wind    = 20,
       data    = dataExample,
       forecastItemList = forecastItems;

    return (
        <Grid container justify="center" direction="column">
            <Grid item xs={12}>
                <CityInfo city={city} country={country}/>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={8}>
                    <Wheater state={state} temperature={temperature} />
                </Grid>
                <Grid item xs={4}>
                    <WheaterDetail humidity={humidity} wind={wind} />
                </Grid>
                <Grid item xs={12}>
                    <ForecastChart data={data}/>
                </Grid>
                <Grid item xs={12}>
                    <ForeCast forecastItemList={forecastItemList}/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CityPage;
