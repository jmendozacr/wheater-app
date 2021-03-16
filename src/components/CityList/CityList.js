import React from 'react';
import useCityList from './../../hooks/useCityList';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import CityInfo from '../CityInfo';
import Weather from '../Weather';
import { getCityCode } from './../../utils/utils';

// eslint-disable-next-line react/display-name
export const renderCityAndCountry = eventOnClickItem => (cityAndCountry, weather) => {
    const { city, countryCode, country } = cityAndCountry;

    return (
        <ListItem 
            key={getCityCode(city, countryCode)}
            onClick={() => eventOnClickItem(city, countryCode)}
            button>
            <Grid container
                justify="center"
                alignItems="center">
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

const CityList = ({ cities, onClickCity, onSetAllWeather, allWeather }) => {
    const { error, setError } = useCityList(cities, onSetAllWeather);

    return (
        <div>
            {
                error && <Alert onClose={() => setError(null)} severity="error">{error}</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
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
    allWeather: PropTypes.func,
    onSetAllWeather: PropTypes.func,
}

export default CityList;
