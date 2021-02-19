import React from 'react';
import { render } from '@testing-library/react';
import Forecast from './Forecast';

const forecastItems = [
    { hour: 12, state: "clouds", weekday: "Friday", temperature: 29 },
    { hour: 12, state: "clear", weekday: "Monday", temperature: 9 },
    { hour: 12, state: "rain", weekday: "Sunday", temperature: 46 },
    { hour: 12, state: "snow", weekday: "Thursday", temperature: 3 },
    { hour: 12, state: "drizzle", weekday: "Thursday", temperature: 21 },
    { hour: 12, state: "thunderstorm", weekday: "Thursday", temperature: 14 },
]

test('should render Forecast', async () => {
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItems} />);

    const items = await findAllByTestId("forecast-item-container");

    expect(items).toHaveLength(6);
})
