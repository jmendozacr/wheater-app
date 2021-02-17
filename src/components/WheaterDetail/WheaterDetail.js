import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const WheaterDetail = ({ humidity, wind }) => {
    return (
        <>
            <Typography>Humidity: {humidity}%</Typography>
            <Typography>Wind: {wind} km/h</Typography>
        </>
    )
}

WheaterDetail.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WheaterDetail
