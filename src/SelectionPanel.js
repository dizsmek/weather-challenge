import React from 'react';
import { Select } from 'antd';
import { cities } from './cities';

const { Option } = Select;

const SelectionPanel = ({ citiesToShow, updateCitiesToShow }) => {
  const cityNames = cities.map(city => city.name);

  const handleSelectionChange = (value) => {
    updateCitiesToShow(value);
  }

  return (
    <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select a city"
      defaultValue={citiesToShow}
      onChange={handleSelectionChange}
    >
      {
        cityNames.map((city, i) => (
          <Option key={i}>{city}</Option>
        ))
      }
    </Select>
  );
};

export default SelectionPanel;
