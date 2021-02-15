import React from 'react';
import CityList from './CityList';


export default {
	title: "City List",
	component: CityList
}

const cities = [
	{ city: "San José", country: "Costa Rica" },
	{ city: "Madrid", country: "España" },
	{ city: "Granada", country: "Nicaragua" },
	{ city: "Tokyo", country: "Japon" },
];

export const CityListExample = () => <CityList cities={cities}/> 