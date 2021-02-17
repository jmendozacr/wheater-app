import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { IconContext } from 'react-icons';
import IconState, { validValues } from './../IconState';

const Wheater = ({ temperature, state }) => {
  return (
    <>
      <IconContext.Provider value={ {size: "5em"} }>
        <IconState state={state}/>
      </IconContext.Provider>
      <Typography display="inline" variant="h3">{temperature}</Typography>
    </>
  );
}

Wheater.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
}

export default Wheater;