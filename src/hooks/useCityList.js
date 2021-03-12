import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCityCode, toCelsius } from './../utils/utils';
import { getWeatherUrl } from './../utils/url';

const useCityList = (cities) => {
    const [allWeather, setAllWeather] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({city, countryCode})

            try {
                const response = await axios.get(url);
                const { data } = response,
                        temperature = toCelsius(data.main.temp),
                        state = data.weather[0].main.toLowerCase(),
                        propName = getCityCode(city, countryCode), //ex: { San José-Costa Rica }
                        propValue = { temperature, state }; // ex: { temperature: 10, state: "rain" }

                setAllWeather( allWeather => ({...allWeather, [propName]: propValue }));
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
    }, [cities]);

    return { allWeather, error, setError };
}

export default useCityList;