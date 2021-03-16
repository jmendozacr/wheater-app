import { validValues } from "../../components/IconState";
import { getCityCode, toCelsius } from './../utils';

const getAllWeather = (response, city, countryCode) => {
    const { data } = response,
        temperature = toCelsius(data.main.temp),
        humidity = data.main.humidity,
        wind    = data.wind.speed,
        stateFromServer = data.weather[0].main.toLowerCase(),
        state = validValues.includes(stateFromServer) ? stateFromServer : null,
        propName = getCityCode(city, countryCode), //ex: { San José-Costa Rica }
        propValue = { temperature, state, humidity, wind }; // ex: { temperature: 10, state: "rain" }

    return ({ [propName]: propValue });
}

export default getAllWeather;