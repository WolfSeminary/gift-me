import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

const WhoGetTheGift = () => {
  const [onChange, setOnChange] = useState();
  const updateValue = (event) => {
    setOnChange(event.target.value);
  };
  return (
    <>
      <Typography variant="h5">Who gets the gift?</Typography>
      <ToggleButtonGroup
          onChange={updateValue}
      >
        <ToggleButton value="To someone else">To someone else</ToggleButton>
        <ToggleButton value="To myself">To myself</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default WhoGetTheGift;
