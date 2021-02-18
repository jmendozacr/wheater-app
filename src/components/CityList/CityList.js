import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import CityInfo from '../CityInfo';
import Wheater from '../Wheater';

const renderCityAndCountry = eventOnClickItem => (cityAndCountry, wheater) => {
  const { city, country } = cityAndCountry;
  // console.log("wheater", wheater);
  // const { temperature, state } = wheater;

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
          md={9}
          xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>

        <Grid item
          md={3}
          xs={12}>
          {
            wheater ?
              (<Wheater temperature={wheater.temperature} state={wheater.state}/>)
              : ("no data")
          }
        </Grid>
      </Grid>
    </ListItem>
  );
}

const CityList = ({ cities, onClickCity }) => {
  const wheater = { temperature: 10, state: "sunny" };
  const [allWheater, setAllWheater] = useState({});

  useEffect(() => {
    const setWheater = (city) => {
      const appId = "dc2da2d33c522744fa9b2f5a99b74e23";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`;

      axios.get(url)
      .then(response => {
        const { data } = response,
          temperature = data.main.temp,
          state= "rain";

          console.log("RESPONSE", temperature);
      })
    }

    cities.forEach(({city, country}) => {
      setWheater(city);
    });
  }, [cities]);

  console.log("cities", cities);

  return (
    <List>
      {
        cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, wheater))
      }
    </List>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
}

export default CityList;
