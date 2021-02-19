import React from 'react';
import CityList from './CityList';
import { action } from '@storybook/addon-actions';


export default {
	title: "City List",
	component: CityList
}

const cities = [
	{ city: "San José", country: "Costa Rica", countryCode: "CR" },
	{ city: "Estonia", country: "Estonia", countryCode: "EE" },
	{ city: "Madrid", country: "España", countryCode: "ES" },
	{ city: "Tokyo", country: "Japon", countryCode: "JP" },
];

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click on city!")}/>;