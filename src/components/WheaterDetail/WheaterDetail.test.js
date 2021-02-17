import React from 'react';
import { render } from '@testing-library/react';
import WheaterDetail from './WheaterDetail'; // SUT

test('should render wheater detail component', async () => {
    const { findByText } = render(<WheaterDetail humidity={12} wind={78}/>);

    const humidity = await findByText(/12/);
    const wind = await findByText(/78/);

    expect(humidity).toHaveTextContent("Humidity: 12%");
    expect(wind).toHaveTextContent("Wind: 78 km/h");
});
