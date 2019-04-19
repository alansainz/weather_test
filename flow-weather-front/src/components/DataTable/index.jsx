import React from 'react';

import { 
  Container,
  Title,
  Data,
  DataContainer,
  Header
} from './style.js'

const metersToKm = (meters) => meters / 1000;

const DataTable = ({ windSpeed, humidity, pressure, visibility }) => (
  <Container>
    <DataContainer>

      <Header>Extra Info</Header>

      <Title>Wind</Title>
      <Data>{windSpeed && `${windSpeed} km/h`} </Data>
      
      <Title>Humidity</Title>
      <Data>{humidity && `${humidity} %`} </Data>
      
      <Title>Pressure</Title>
      <Data>{pressure && `${pressure} mb`} </Data>
      
      <Title>Visibility</Title>
      <Data isLast={true}>{visibility && `${metersToKm(visibility)} km`}</Data>
     
    </DataContainer>
  </Container>
);

export default DataTable