import React from 'react';
import CityCard from './CityCard'
import DataTable from './DataTable'

import { Container } from './style.js'

const TodayForecast = (props) => (
  <Container>
    <CityCard {...props.cityCard} />
    <DataTable {...props.dataTable} />
  </Container>
)


export default TodayForecast