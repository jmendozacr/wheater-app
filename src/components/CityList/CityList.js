import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import CityInfo from '../CityInfo';
import Wheater from '../Wheater';

const renderCityAndCountry = eventOnClickItem => cityAndCountry => {
  const { city, country } = cityAndCountry;

  return (
    <ListItem 
      key={city}
      onClick={eventOnClickItem}
      button>
      <Grid container
        justify="center"
        alignItems="center"
      >
        <Grid item
          md={8}
          xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>

        <Grid item
          md={4}
          xs={12}>
          <Wheater temperature={10} state="fog"/>
        </Grid>
      </Grid>
    </ListItem>
  );
}

const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
      {
        cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
      }
    </List>
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
