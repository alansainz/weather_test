import React from 'react';
import DayCard from './DayCard'

import { Container } from './style.js'

const FiveDayForecast = ({ fiveDayForecast }) => (
  <Container>
    {
     fiveDayForecast && fiveDayForecast.map((dayForecast, index) => 
       <DayCard
         key={index} 
         id={index}
         day={dayForecast.dt}
         description={dayForecast.weather.length && dayForecast.weather[0].description}
         temperature={dayForecast.temp.max}
       />
     ) 
    }
  </Container>
)


export default FiveDayForecast