import React from 'react';
import PropTypes from 'prop-types';
import CityInfo from '../CityInfo/CityInfo';
import Wheater from '../Wheater/Wheater';

const renderCityAndCountry = cityAndCountry => {
  const { city, country } = cityAndCountry;

  return (
    <li>
      <CityInfo city={city} country={country} />
      <Wheater temperature={2} state="fog"/>
    </li>
  )
}

const CityList = ({ cities }) => {
  return (
    <ul>
      {
        cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
      }
    </ul>
  )
}

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default CityList;
