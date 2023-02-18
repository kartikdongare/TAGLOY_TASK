import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CheckBoxData } from "../CheckBoxData";

export default function CheckBox() {
  const [parentList, setParentList] = useState({});
  const [grandParentList, setGrandParentList] = React.useState({});
  const [childList, setChildList] = React.useState({});

  const handleGrandParent = (event, name) => {
    setGrandParentList({ ...grandParentList, [name]: event.target.checked });
  };

  const handleParent = (event, name) => {
    setParentList({ ...parentList, [name]: event.target.checked });
  };
  const handleChild = (event, name) => {
    setChildList({ ...childList, [name]: event.target.checked });
  };
  const childCheckList = (elmChild, parentId, isChecked) => (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        key={elmChild.city.id}
        label={elmChild.city.name}
        control={
          <Checkbox
            checked={Boolean(isChecked || parentList[elmChild.city.name+parentId])}
            onChange={(event) => handleParent(event, elmChild.city.name+parentId)}
          />
        }
      />
      {elmChild.area.map((child2, index) => (
        <Box
          key={child2.area + index}
          sx={{ display: "flex", flexDirection: "column", ml: 3 }}
        >
          <FormControlLabel
            label={child2.area}
            control={
              <Checkbox
                checked={Boolean(
                  isChecked || parentList[elmChild.city.name+parentId] || childList[child2.area+parentId]
                )}
                onChange={(event) => handleChild(event, child2.area+parentId)}
              />
            }
          />
        </Box>
      ))}
    </Box>
  );

  return (
    <>
      {CheckBoxData.result.map((element, index) => (
        <>
          <FormControlLabel
            label={element.name}
            control={
              <Checkbox
                checked={Boolean(grandParentList[element.name])}
                value={element.id}
                onChange={(event) => handleGrandParent(event, element.name)}
              />
            }
          />
          {element.advertisers.map((elementChild) =>
            childCheckList(elementChild,element.id, Boolean(grandParentList[element.name]))
          )}
        </>
      ))}
    </>
  );
}