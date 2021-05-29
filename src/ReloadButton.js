import React, { useEffect } from 'react';
import { cities } from './cities';
import { Button } from 'antd';

const API_KEY = "b944703ce65ed6cf6b71dd3a2873dd9d";

const ReloadButton = ({ updateWeatherData }) => {

  const fetchWeatherData = async () => {
    try {
      const tableDataFromFetchResult = (fetchResult, cityName) => {
        const { id, main } = fetchResult;
        const { temp, temp_min } = main;
        const time = new Date().toLocaleTimeString();

        return {
          id,
          cityName,
          temp,
          temp_min,
          time
        };
      }

      const data = [];

      for (const city of cities) {
        const cityData = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${API_KEY}`);
        const cityDataObject = await cityData.json();

        data.push(tableDataFromFetchResult(cityDataObject, city.name));
      }

      updateWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <Button type='primary' onClick={fetchWeatherData}>Refresh</Button>
  );
};

export default ReloadButton;
