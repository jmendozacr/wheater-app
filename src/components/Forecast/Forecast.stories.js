import React from 'react';
import Forecast from './Forecast';

export default {
    title: "Forecast",
    component: Forecast,
}

const forecastItems = [
    { hour: 12, state: "clouds", weekday: "Friday", temperature: 29 },
    { hour: 12, state: "clear", weekday: "Monday", temperature: 9 },
    { hour: 12, state: "rain", weekday: "Sunday", temperature: 46 },
    { hour: 12, state: "snow", weekday: "Thursday", temperature: 3 },
    { hour: 12, state: "drizzle", weekday: "Thursday", temperature: 21 },
    { hour: 12, state: "thunderstorm", weekday: "Thursday", temperature: 14 },
];

export const ForecastExample = () => <Forecast forecastItemList={forecastItems} />;