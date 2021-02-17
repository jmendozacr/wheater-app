import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import CityInfo from '../CityInfo';
import Wheater from '../Wheater';

const renderCityAndCountry = eventOnClickItem => cityAndCountry => {
  const { city, country } = cityAndCountry;

  return (
    <li key={city} onClick={eventOnClickItem}>
      <Grid container
        justify="center"
        alignItems="center"
      >
        <Grid item
        md={8}
        xs={12}
        >
          <CityInfo city={city} country={country} />
        </Grid>

        <Grid item
        md={4}
        xs={12}
        >
          <Wheater temperature={2} state="fog"/>
        </Grid>
      </Grid>
    </li>
  );
}

const CityList = ({ cities, onClickCity }) => {
  return (
    <ul>
      {
        cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
      }
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  })),
  onClickCity: PropTypes.func.isRequired,
}

export default CityList;
