import React from 'react';
import { render } from '@testing-library/react';
import CityList from './CityList'; // SUT

const cities = [
	{ city: "San José", country: "Costa Rica" },
	{ city: "Madrid", country: "España" },
	{ city: "Granada", country: "Nicaragua" },
	{ city: "Tokyo", country: "Japon" },
];

test("CitiList renders", async () => {
    const { findAllByRole } = render(<CityList cities={cities}/>);

    const items = await findAllByRole("listitem");

    expect(items).toHaveLength(4);
});