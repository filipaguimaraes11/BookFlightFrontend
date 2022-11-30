import React from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from 'react';
import './Search.css';
import { DateRange } from 'react-date-range';
import { MdSettingsInputAntenna } from 'react-icons/md';
import Select, { NonceProvider } from 'react-select';
import { FaCentercode } from 'react-icons/fa';

function Search() {
  const optionsOrigins = [
    { value: 'opo', label: 'Porto' },
    { value: 'svq', label: 'Sevilha' },
    { value: 'lnd', label: 'Londres' },
    { value: 'tko', label: 'Tokyo' },
    { value: 'rom', label: 'Roma' },
  ];

  return (
    <>
      <div className="selectContainer">
        <Select
          className="selectOrigin"
          name="origins"
          options={optionsOrigins}
          placeholder="Select your origin"
          theme={(theme) => ({
            ...theme,
            borderRadius: 10,
            background: "blue",
            colors: {
              ...theme.colors,
              text: 'orange',
              primary25: 'lightgrey',
              primary: 'darkmagenta',
              primary50: 'lightgrey'
            },
          })}
          
        />
      </div>

    </>
  );
}

export default Search;
