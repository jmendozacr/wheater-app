import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const WeatherDetail = ({ humidity, wind }) => {
    return (
        <>
            <Typography>Humidity: {humidity}%</Typography>
            <Typography>Wind: {wind} km/h</Typography>
        </>
    );
}

WeatherDetail.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WeatherDetail;
