import React, { useState } from 'react';
import { StyledSelect } from './style.js'

const Select = ({ options, onChange }) => {
  const [value, setValue] = useState(0);
  return (
    <React.Fragment>
      <StyledSelect 
        onChange={e => {
          setValue(e.target.value)
          onChange && onChange(e.target.value)
        }}
        value={value}
      >
        {
          options && options.map(option =>
            <option 
              key={option.id} 
              value={option.id}
            >
              {option.name}
            </option>
          )
        }
      </StyledSelect>
    </React.Fragment>
  );
}


export default Select;