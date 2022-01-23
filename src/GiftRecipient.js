import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const GiftRecipient = () => {
  const [onChange, setOnChange] = useState();
  const updateValue = (event) => {
    setOnChange(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Recipient Name"
        variant="outlined"
        onChange={(e) => {
          updateValue(e);
          console.log(onChange);
        }}
      />
    </Box>
  );
};

export default GiftRecipient;
