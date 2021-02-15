import React from 'react';
import 'typeface-roboto';
import Wheater from './Wheater';

export default {
  title: "Wheater",
  component: Wheater,
}

export const WheaterCloudy = () => (<Wheater temperature={23} state="cloudy"></Wheater>);
export const WheaterSunny = () => (<Wheater temperature={23} state="sunny"></Wheater>);