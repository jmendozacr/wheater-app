import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getForecastUrl } from './../utils/url';
import getChartData from '../utils/transform/getChartData';
import getForecastItemList from '../utils/transform/getForecastItemList';

const useCityPage = () => {
    const { city, countryCode } = useParams();
    const [chartData, setChartData] = useState(null);
    const [forecastItemList, setForecastItemList] = useState(null);

    useEffect(() => {
        const getForecast = async () => {
            const url = getForecastUrl({ city, countryCode });

            try {
                const { data } = await axios.get(url);
                const dataAux = getChartData(data);
                setChartData(dataAux);

                const forecastItemListAux = getForecastItemList(data);
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