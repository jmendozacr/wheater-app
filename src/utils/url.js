export const appId = "dc2da2d33c522744fa9b2f5a99b74e23";
export const getForecastUrl = ({city, countryCode}) => (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appId}`
);

export const getWeatherUrl = ({city, countryCode}) => (
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appId}`
);