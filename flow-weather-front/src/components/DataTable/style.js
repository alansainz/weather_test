import styled from 'styled-components';

import { TABLE_COLOR } from '../../config/styleConstants.js';

export const Container = styled.div`
  width: 150px;
  height: 350px;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
`
export const Header = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`

export const Data = styled.div`
  font-size: 16px;
  padding-bottom: 5px;
  margin-bottom: 5px;
  color: ${TABLE_COLOR}
  border-bottom: ${props => !props.isLast ? `1px solid ${TABLE_COLOR}` : null};
`

export const DataContainer = styled.div`
  padding: 20px
`


