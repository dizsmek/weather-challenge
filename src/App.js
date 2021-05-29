import React, { useState } from 'react';
import WeatherTable from './WeatherTable';
import SelectionPanel from './SelectionPanel';
import ReloadButton from './ReloadButton';
import { cities } from './cities';

import './index.css';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  const cityIndexes = Array.from(Array(cities.length).keys()).map((_, i) => String(i));
  const [citiesToShow, setCitiesToShow] = useState(cityIndexes);

  return (
    <div className="App">
      <SelectionPanel citiesToShow={citiesToShow} updateCitiesToShow={(cities) => { setCitiesToShow(cities) }} />
      <WeatherTable citiesToShow={citiesToShow} weatherData={weatherData} />
      <ReloadButton updateWeatherData={(data) => { setWeatherData(data) }} />
    </div>
  );
};

export default App;
