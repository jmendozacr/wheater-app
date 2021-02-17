import React from 'react';
import { useHistory } from 'react-router-dom';
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame';
import Paper from '@material-ui/core/Paper';

const cities = [
	{ city: "San José", country: "Costa Rica" },
	{ city: "Madrid", country: "España" },
	{ city: "Granada", country: "Nicaragua" },
	{ city: "Tokyo", country: "Japon" },
];

const MainPage = () => {
    const history = useHistory();

    const onClickHandler = () => {
        history.push("/city");
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
