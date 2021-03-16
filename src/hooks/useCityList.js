import { useEffect, useState } from 'react';
import axios from 'axios';
import { getWeatherUrl } from './../utils/url';
import getAllWeather from '../utils/transform/getAllWeather';

const useCityList = (cities, onSetAllWeather) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({city, countryCode})

            try {
                const response = await axios.get(url);
                const allWeatherAux = getAllWeather(response, city, countryCode);

                onSetAllWeather(allWeatherAux);
            } catch (error) {
                if (error.response) {
                    setError("There is an error with the server.");
                } else if (error.request) {
                    setError("Check the internet connection.");
                } else {
                    setError("Error loading data.");
                }
            }
        }

        cities.forEach(({city, countryCode}) => {
            setWeather(city, countryCode);
        });
    }, [cities, onSetAllWeather]);

    return { error, setError };
}

export default useCityList;