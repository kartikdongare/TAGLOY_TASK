import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CheckBoxData } from '../CheckBoxData'

export default function CheckBox() {
  const [checked, setChecked] = useState({});
  const [parentList, setParentChecked] = React.useState({});
  const handleChange1 = (event, name) => {
    setParentChecked({ ...parentList, [name]: event.target.checked });
  };

  const handleChange2 = (event, name) => {
    setChecked({ ...checked, [name]: event.target.checked });
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (elementChild, isChecked) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel key={elementChild.city.name}
        label={elementChild.city.name}
        control={<Checkbox checked={Boolean(isChecked || checked[elementChild.city.name])} onChange={event => handleChange2(event, elementChild.city.name)} />}
      />
      {elementChild.area.map(elementChild2 => (
        <Box key={elementChild2.area} sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            label={elementChild2.area}
            control={<Checkbox checked={elementChild2.area} checked={Boolean(isChecked || checked[elementChild.city.name])} />}
          /></Box>))}
    </Box>
  );

  return (
    <>
      {CheckBoxData.result.map((element, index) => (
        <><FormControlLabel
          label={element.name}
          control={
            <Checkbox
              checked={Boolean(parentList[element.name])}
              value={element.id}
              indeterminate={checked[0] !== checked[1]}
              onChange={event => handleChange1(event, element.name)}
            />
          }
        />
          {
            element.advertisers.map(elementChild => (
              children(elementChild, Boolean(parentList[element.name]))
            ))}</>
      ))}
    </>
  );
}