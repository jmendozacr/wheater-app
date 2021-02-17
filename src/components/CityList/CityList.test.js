import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CityList from './CityList'; // SUT

const cities = [
	{ city: "San José", country: "Costa Rica" },
	{ city: "Madrid", country: "España" },
	{ city: "Granada", country: "Nicaragua" },
	{ city: "Tokyo", country: "Japon" },
];

test("CityList renders", async () => {
	const fnClickOnItem = jest.fn();

	const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>);

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