import React from 'react';
import { render } from '@testing-library/react';
import WeatherDetail from './WeatherDetail'; // SUT

test('should render weather detail component', async () => {
    const { findByText } = render(<WeatherDetail humidity={12} wind={78}/>);

    const humidity = await findByText(/12/);
    const wind = await findByText(/78/);

    expect(humidity).toHaveTextContent("Humidity: 12%");
    expect(wind).toHaveTextContent("Wind: 78 km/h");
});
