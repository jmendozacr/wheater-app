import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ForecastItem from '../ForecastItem/ForecastItem';
import { validValues } from './../IconState';

const renderForecast = forecast => {
    const { weekday, hour, state, temperature } = forecast;

    return(
        <Grid
            data-testid="forecast-item-container"
            item
            key={`${weekday}${hour}`}>
            <ForecastItem 
                weekday={weekday}
                hour={hour}
                state={state}
                temperature={temperature}/>
        </Grid>
    );
}

const Forecast = ({ forecastItemList }) => {
    return (
        <Grid container
            justify="center"
            alignItems="center"
        >
            {
                forecastItemList.map(forecast => renderForecast(forecast))
            }
        </Grid>
    )
}

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekday: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired,
    })).isRequired,
}

export default Forecast;
