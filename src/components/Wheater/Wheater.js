import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi';
import { IconContext } from 'react-icons';

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain,
}

const renderState = state => {
  const IconState = stateByName[state];

  return <IconState/>;
}

const Wheater = ({ temperature, state }) => {
  return (
    <>
      <IconContext.Provider value={ {size: "5em"} }>
        {renderState(state)}
      </IconContext.Provider>
      <Typography display="inline" variant="h3">{temperature}</Typography>
    </>
  );
}

Wheater.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired
}

export default Wheater;