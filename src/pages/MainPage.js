import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame';
import Paper from '@material-ui/core/Paper';
import { getServiceCities } from '../utils/serviceCities';

const MainPage = ({ onSetAllWeather, allWeather }) => {
    const history = useHistory();

    const onClickHandler = (city, countryCode) => {
        history.push(`/city/${countryCode}/${city}`);
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList
                    allWeather={allWeather}
                    cities={getServiceCities()}
                    onClickCity={onClickHandler}
                    onSetAllWeather={onSetAllWeather}
                />
            </Paper>
        </AppFrame>
    );
}

MainPage.propTypes = {
    allWeather: PropTypes.func,
    onSetAllWeather: PropTypes.func,
}

export default MainPage;
