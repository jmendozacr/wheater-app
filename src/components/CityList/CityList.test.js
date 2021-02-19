import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CityList from './CityList'; // SUT

const cities = [
	{ city: "San José", country: "Costa Rica", countryCode: "CR" },
	{ city: "Estonia", country: "Estonia", countryCode: "EE" },
	{ city: "Madrid", country: "España", countryCode: "ES" },
	{ city: "Tokyo", country: "Japon", countryCode: "JP" },
];

test("CityList renders", async () => {
	const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => {}}/>);

    const items = await findAllByRole("button");

    expect(items).toHaveLength(4);
});

test("CityList click on item", async () => {
	const fnClickOnItem = jest.fn();

	const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>);

	const item = await findAllByRole("button");

	fireEvent.click(item[0]);

	expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});