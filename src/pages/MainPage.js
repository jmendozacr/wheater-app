import React from 'react';
import { useHistory } from 'react-router-dom';
import CityList from './../components/CityList';

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
        <div>
            <h2>Main Page</h2>
            <CityList cities={cities} onClickCity={onClickHandler}/>
        </div>
    );
}

export default MainPage;
