import React from 'react';
import 'typeface-roboto';
import CityInfo from './CityInfo';

export default {
  title: "City Info",
  component: CityInfo,
}

export const CityExample = () => (<CityInfo city={"Alajuela"} country={"Costa Rica"}></CityInfo>);