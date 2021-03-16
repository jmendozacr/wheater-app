import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { LinearProgress } from '@material-ui/core';
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
import WeatherDetail from './../components/WeatherDetail';
import ForecastChart from './../components/ForecastChart';
import ForeCast from './../components/Forecast';
import AppFrame from './../components/AppFrame';
import useCityPage from './../hooks/useCityPage';
import useCityList from '../hooks/useCityList';
import { getCityCode } from '../utils/utils';
import { getCountryNameByCountryCode } from '../utils/serviceCities';

const CityPage = ({ allWeather, onSetAllWeather }) => {
    const { city, countryCode, chartData, forecastItemList } = useCityPage();

    const cities = useMemo(() => ([{ city,  countryCode }]), [city,  countryCode]);
    useCityList(cities, onSetAllWeather);

    const weather = allWeather[getCityCode(city, countryCode)],
        country = countryCode && getCountryNameByCountryCode(countryCode),
        state   = weather && weather.state,
        temperature = weather && weather.temperature,
        humidity = weather && weather.humidity,
        wind    = weather && weather.wind;

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
                    {
                        humidity && wind && <WeatherDetail humidity={humidity} wind={wind} />
                    }
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

CityPage.propTypes = {
    allWeather: PropTypes.func,
    onSetAllWeather: PropTypes.func,
}

export default CityPage;
