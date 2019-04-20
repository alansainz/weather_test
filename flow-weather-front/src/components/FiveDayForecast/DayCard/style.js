import styled from 'styled-components';

import { GRADIENT_ONE, GRADIENT_TWO, CARD_TEXT } from '../../../config/styleConstants.js';

export const Container = styled.div`
  background-color: ${props => Number(props.id) % 2 ? GRADIENT_ONE : GRADIENT_TWO};
  width: 200px;
  height: 250px;
  color: ${CARD_TEXT};
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Day = styled.div`
  font-size: 18px;
  padding: 20px;
`

export const Description = styled.div`
  font-size: 12px;
  padding: 10px;
`

export const Temperature = styled.div`
  font-size: 24px;
  padding: 15px;
`
