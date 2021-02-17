import React from 'react';
import ForecastItem from './ForecastItem';

export default {
    title: "Forecast item",
    component: ForecastItem
}

export const SunnyMonday = () => <ForecastItem weekday="monday" hour={12} state="sunny" temperature={24}/>
export const FogFriday = () => <ForecastItem weekday="friday" hour={15} state="fog" temperature={12}/>