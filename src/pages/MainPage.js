import React from 'react';
import { useHistory } from 'react-router-dom';
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame';
import Paper from '@material-ui/core/Paper';

const cities = [
	{ city: "San José", country: "Costa Rica", countryCode: "CR" },
	{ city: "Estonia", country: "Estonia", countryCode: "EE" },
	{ city: "Madrid", country: "España", countryCode: "ES" },
	{ city: "Tokyo", country: "Japon", countryCode: "JP" },
];

const MainPage = () => {
    const history = useHistory();

    const onClickHandler = (city, countryCode) => {
        history.push(`/city/${countryCode}/${city}`);
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={cities} onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>
    );
}

export default MainPage;
