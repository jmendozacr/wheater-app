import React, { useEffect, useState } from 'react';
import axios from 'axios';
import convertUnits from 'convert-units';
import Alert from '@material-ui/lab/Alert';
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
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, country, countryCode) => {
      const appId = "dc2da2d33c522744fa9b2f5a99b74e23";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appId}`;

      try {
        const response = await axios.get(url);
        const { data } = response,
                temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0)),
                state = data.weather[0].main.toLowerCase(),
                propName = `${city}-${country}`, //ex: { San José-Costa Rica }
                propValue = {temperature, state}; // ex: { temperature: 10, state: "rain" }

        setAllWeather( allWeather => ({...allWeather, [propName]: propValue }));
      } catch (error) {
        if (error.response) {
          setError("There is an error with the server.");
        } else if (error.request) {
          setError("Check the internet connection.");
        } else {
          setError("Error loading data.");
        }
      }
    }

    cities.forEach(({city, country, countryCode}) => {
      setWeather(city, country, countryCode);
    });
  }, [cities]);

  return (
    <div>
      {
        error && <Alert onClose={() => setError(null)} severity="error">{error}</Alert>
      }
      <List>
        {
          cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
            allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
        }
      </List>
    </div>
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
