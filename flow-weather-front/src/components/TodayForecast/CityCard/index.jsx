import React from 'react';
import { returnTempOrDoubleDash } from '../../../utils';

import { 
  Container, 
  City, 
  Temperature, 
  DataContainer, 
  Description, 
  MaxMinTemperature 
} from './style.js'

const CityCard = ({ city, temperature, description, maxTemp, minTemp }) => (
  <Container>
    <City>
      { city && city.toUpperCase() }
    </City>
    
    <DataContainer>
      <Temperature>
        { returnTempOrDoubleDash(Math.floor(temperature)) }
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