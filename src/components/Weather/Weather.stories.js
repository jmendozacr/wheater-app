import React from 'react';
import 'typeface-roboto';
import Weather from './Weather';

export default {
  title: "Weather",
  component: Weather,
}

export const WeatherCloudy = () => (<Weather temperature={23} state="clouds"></Weather>);
export const WeatherSunny = () => (<Weather temperature={23} state="snow"></Weather>);