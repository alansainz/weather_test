import React from 'react';

import { 
  Container, 
  City, 
  Temperature, 
  DataContainer, 
  Description, 
  MaxMinTemperature 
} from './style.js'

const returnTempOrDoubleDash = (temp) => {
  if(temp) {
    return temp + '°'
  } else {
    return '--'
  }
}

const CityCard = ({ name, temperature, description, maxTemp, minTemp }) => (
  <Container>
    <City>
      { name && name.toUpperCase() }
    </City>

    <DataContainer>
      <Temperature>
        { returnTempOrDoubleDash(temperature) }
      </Temperature>
      <Description>
        { description && description.toUpperCase() }
      </Description>
      <MaxMinTemperature>
        { `Max. ${returnTempOrDoubleDash(maxTemp)} Min. ${returnTempOrDoubleDash(minTemp)}` }
      </MaxMinTemperature>
    </DataContainer>
  </Container>
);

export default CityCard