import React from 'react';
import { render } from '@testing-library/react';
import Forecast from './Forecast';

const forecastItems = [
    { weekday: "Friday", hour: 12, state: "cloud", temperature: 29 },
    { weekday: "Monday", hour: 12, state: "cloud", temperature: 29 },
    { weekday: "Sunday", hour: 12, state: "cloud", temperature: 29 },
    { weekday: "Thursday", hour: 12, state: "cloud", temperature: 29 },
]

test('should render Forecast', async () => {
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItems} />);

    const items = await findAllByTestId("forecast-item-container");

    expect(items).toHaveLength(4);
})
