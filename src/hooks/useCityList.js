import { useEffect, useState } from 'react';
import axios from 'axios';
import convertUnits from 'convert-units';
import { getCityCode } from './../utils/utils';

const useCityList = (cities) => {
    const [allWeather, setAllWeather] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const appId = "dc2da2d33c522744fa9b2f5a99b74e23";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appId}`;

            try {
                const response = await axios.get(url);
                const { data } = response,
                        temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0)),
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