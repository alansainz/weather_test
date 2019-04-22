import React from 'react';
import { returnDayFromUnix, returnTempOrDoubleDash } from '../../../utils';

import { 
  Container, 
  Day, 
  Description, 
  Temperature 
} from './style.js'

const DayCard = ({ id, day, description, temperature}) => (
  <Container id={id}>
    <Day>{ returnDayFromUnix(day) }</Day>
    <Description>{ description && description.toUpperCase() }</Description>
    <Temperature>{ returnTempOrDoubleDash(Math.floor(temperature))  }</Temperature>
  </Container>
)


export default DayCard