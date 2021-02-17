import React from 'react';
import Forecast from './Forecast';

export default {
    title: "Forecast",
    component: Forecast,
}

const forecastItems = [
    { weekday: "Friday", hour: 12, state: "cloud", temperature: 29 },
    { weekday: "Monday", hour: 12, state: "cloud", temperature: 29 },
    { weekday: "Sunday", hour: 12, state: "cloud", temperature: 29 },
    { weekday: "Thursday", hour: 12, state: "cloud", temperature: 29 },
]

export const ForecastExample = () => <Forecast forecastItemList={forecastItems} />