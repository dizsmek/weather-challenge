import React from 'react';
import { Table } from 'antd';
import { cities } from './cities';

const WeatherTable = ({ weatherData, citiesToShow }) => {
  const cityNamesToShow = citiesToShow.map(cityIndex => cities[cityIndex].name);
  const weatherDataToShow = weatherData.filter(cityData => cityNamesToShow.includes(cityData.cityName));

  const columns = [
    {
      title: "City Name",
      dataIndex: "cityName",
      key: "cityName"
    },
    {
      title: "Temperature",
      dataIndex: "temp",
      key: "temp"
    },
    {
      title: "Min. Temperature",
      dataIndex: "temp_min",
      key: "temp_min"
    },
    {
      title: "Uploaded at",
      dataIndex: "time",
      key: "time"
    }
  ];

  return (
    <Table dataSource={weatherDataToShow} columns={columns} rowKey='id' pagination={false} />
  );
};

export default WeatherTable;
