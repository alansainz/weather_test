import React from 'react';
import Row from './Row'
import { 
  Container,
  DataContainer,
  Header
} from './style.js'

const metersToKm = (meters) => meters / 1000;

const DataTable = ({ windSpeed, humidity, pressure, visibility }) => {
  const tableData = [
    {
      title: 'Wind',
      symbol: 'km/h',
      value: windSpeed && windSpeed
    },
    {
      title: 'Humidity',
      symbol: '%',
      value: humidity && humidity
    },
    {
      title: 'Pressure',
      symbol: 'mb',
      value: pressure && pressure
    },
    {
      title: 'Visibility',
      symbol: 'km',
      value: visibility && metersToKm(visibility),
      isLast: true
    }
  ]
  return (
    <Container>
      <DataContainer>
        <Header>Extra Info</Header>
        {
          tableData.map((row, index) => 
            <Row 
              key={index}
              title={row.title} 
              value={row.value} 
              symbol={row.symbol}
            />
          )
        }
      </DataContainer>
    </Container>
  )
};

export default DataTable