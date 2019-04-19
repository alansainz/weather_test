import styled from 'styled-components';

import { GRADIENT_ONE, GRADIENT_TWO, CARD_TEXT } from '../../config/styleConstants.js';

export const Container = styled.div`
  background: rgb(54,166,215);
  background: linear-gradient(0deg, ${GRADIENT_ONE} 0%, ${GRADIENT_TWO} 100%);
  width: 420px;
  height: 350px;
  color: ${CARD_TEXT}
`

export const City = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
`

export const Temperature = styled.div`
  font-size: 40px;
  font-weight: bold;
`

export const DataContainer = styled.div`
  padding: 20px;
`

export const Description = styled.div`
  font-size: 20px;
  font-weight: bold;
`
export const MaxMinTemperature = styled.div`
  font-size: 16px;
  margin-top: 10px;
`
