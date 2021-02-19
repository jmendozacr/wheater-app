import React from 'react';
import WeatherDetail from './WeatherDetail';

export default {
    title: "Weather Detail",
    component: WeatherDetail
}

export const WeatherDetailExample = () => (<WeatherDetail humidity={12} wind={78}/>)