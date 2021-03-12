import axios from 'axios';
import moment from 'moment';
import convertUnits from 'convert-units';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const useCityPage = () => {
    const { city, countryCode } = useParams();
    const [chartData, setChartData] = useState(null);
    const [forecastItemList, setForecastItemList] = useState(null);

    useEffect(() => {
        const getForecast = async () => {
            const id = "dc2da2d33c522744fa9b2f5a99b74e23";
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${id}`;
            const toCelsius = (temp) => Number(convertUnits(temp).from("K").to("C").toFixed(0));

            try {
                const { data } = await axios.get(url);
                const daysAhead = [0, 1, 2, 3, 4, 5];
                const days = daysAhead.map(d => moment().add(d, "d"));

                const dataAux = days.map(day => {
                    const tempObjArray = data.list.filter(item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear();

                        return dayOfYear === day.dayOfYear();
                    });

                    const temps = tempObjArray.map(item => item.main.temp);

                    return({
                        dayHour: day.format("ddd"),
                        min: toCelsius(Math.min(...temps)),
                        max: toCelsius(Math.max(...temps)),
                        hasTemp: ( temps.length > 0 ? true : false ), 
                    });
                }).filter(item => item.hasTemp);

                setChartData(dataAux);

                const interval = [4, 8, 12, 16, 20, 24];
                const forecastItemListAux = data.list
                .filter((item, index) => interval.includes(index))
                .map(item => {
                    return({
                        hour: moment.unix(item.dt).hour(),
                        weekday: moment.unix(item.dt).format("dddd"),
                        state: item.weather[0].main.toLowerCase(),
                        temperature: toCelsius(item.main.temp)
                    });
                });

                setForecastItemList(forecastItemListAux);
            } catch (error) {
                console.log(error);
            }
        }

        getForecast();
    }, [city, countryCode]);

    return { city, chartData, forecastItemList }
}

export default useCityPage;