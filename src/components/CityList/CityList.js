import React, { useEffect, useState } from 'react';
import axios from 'axios';
import convertUnits from 'convert-units';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import CityInfo from '../CityInfo';
import Weather from '../Weather';

const renderCityAndCountry = eventOnClickItem => (cityAndCountry, weather) => {
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
          md={9}
          xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>

        <Grid item
          md={3}
          xs={12}>
          <Weather temperature={weather && weather.temperature} state={weather && weather.state}/>
        </Grid>
      </Grid>
    </ListItem>
  );
}

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({});

  useEffect(() => {
    const setWeather = (city, country, countryCode) => {
      const appId = "dc2da2d33c522744fa9b2f5a99b74e23";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appId}`;

      axios.get(url)
      .then(response => {
        const { data } = response,
          temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0)),
          state = data.weather[0].main.toLowerCase(),
          propName = `${city}-${country}`, //ex: { San José-Costa Rica }
          propValue = {temperature, state}; // ex: { temperature: 10, state: "rain" }

          console.log("STATE", propValue);

        setAllWeather( allWeather => ({...allWeather, [propName]: propValue }));
      })
      .catch(error => {
        if (error.response) {
          const { data, status } = error.response;
          console.log("data", data);
          console.log("status", status);
        } else if (error.request) {
          console.log("Server inaccessible or there is no internet.");
        } else {
          console.log("unforeseen errors.");
        }
      });
    }

    cities.forEach(({city, country, countryCode}) => {
      setWeather(city, country, countryCode);
    });
  }, [cities]);

  return (
    <List>
      {
        cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
          allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
      }
    </List>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
}

export default CityList;
