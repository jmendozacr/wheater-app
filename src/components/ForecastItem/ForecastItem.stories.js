import React from 'react';
import ForecastItem from './ForecastItem';

export default {
    title: "Forecast item",
    component: ForecastItem
}

export const ClearMonday = () => <ForecastItem weekday="monday" hour={12} state="clear" temperature={24}/>
export const DrizzleFriday = () => <ForecastItem weekday="friday" hour={15} state="drizzle" temperature={12}/>