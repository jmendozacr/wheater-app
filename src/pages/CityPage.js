import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import convertUnits from 'convert-units';
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
import WeatherDetail from './../components/WeatherDetail';
import ForecastChart from './../components/ForecastChart';
import ForeCast from './../components/Forecast';
import AppFrame from './../components/AppFrame';

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
                    const fallbackTemp = temps.length ? temps : [290];

                    return({
                        dayHour: day.format("ddd"),
                        min: toCelsius(Math.min(...fallbackTemp)),
                        max: toCelsius(Math.max(...fallbackTemp)), 
                    });
                });

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

const CityPage = () => {
    const { city, chartData, forecastItemList } = useCityPage()

    const country = "Costa Rica",
       state   = "snow",
       temperature = 23,
       humidity = 80,
       wind    = 20;

    return (
        <AppFrame>
            <Grid container 
                justify="space-around"
                direction="column"
                spacing={2}>
                <Grid container item 
                    xs={12}
                    justify="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid container item 
                    xs={12}
                    justify="center">
                    <Weather state={state} temperature={temperature} />
                    <WeatherDetail humidity={humidity} wind={wind} />
                </Grid>
                <Grid item>
                    {
                        chartData && <ForecastChart data={chartData}/>
                    }
                </Grid>
                <Grid item>
                    {
                        forecastItemList && <ForeCast forecastItemList={forecastItemList}/>
                    }
                </Grid>
            </Grid>
        </AppFrame>
    );
}

export default CityPage;
