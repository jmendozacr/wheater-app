import React from 'react';
import Grid from '@material-ui/core/Grid';
import { LinearProgress } from '@material-ui/core';
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
import WeatherDetail from './../components/WeatherDetail';
import ForecastChart from './../components/ForecastChart';
import ForeCast from './../components/Forecast';
import AppFrame from './../components/AppFrame';
import useCityPage from './../hooks/useCityPage';

const CityPage = () => {
    const { city, chartData, forecastItemList } = useCityPage()

    const country = "Costa Rica",
       state   = "snow",
       temperature = 23,
       humidity = 80,
       wind    = 20;

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
                        !chartData && !forecastItemList && <LinearProgress/>
                    }
                </Grid>
                <Grid item>
                    {
                        chartData && <ForecastChart data={chartData}/>
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
