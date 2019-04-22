import React from 'react';

import { Title, Data } from './style.js';

const Row = ({ title, value, symbol, isLast }) => (
  <React.Fragment>
    <Title>{title}</Title>
    <Data isLast={isLast}>{value && `${value} ${symbol}`} </Data>
  </React.Fragment>
);

export default Row;
