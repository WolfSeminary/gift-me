import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

const WhoGetTheGift = ({ onChange, value }) => {
  return (
    <>
      <Typography variant="h5">Who gets the gift?</Typography>
      <ToggleButtonGroup value={value} onChange={onChange}>
        <ToggleButton value="To someone else">To someone else</ToggleButton>
        <ToggleButton value="To myself">To myself</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default WhoGetTheGift;
