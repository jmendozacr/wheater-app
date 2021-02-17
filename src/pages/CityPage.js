import React from 'react';
import Grid from '@material-ui/core/Grid';
import CityInfo from './../components/CityInfo';
import Wheater from './../components/Wheater';
import WheaterDetail from './../components/WheaterDetail';
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
                    <Wheater state={state} temperature={temperature} />
                    <WheaterDetail humidity={humidity} wind={wind} />
                </Grid>
                <Grid item>
                    <ForecastChart data={data}/>
                </Grid>
                <Grid item>
                    <ForeCast forecastItemList={forecastItemList}/>
                </Grid>
            </Grid>
        </AppFrame>
    );
}

export default CityPage;
