import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const GiftSender = () => {
  const [onChange, setOnChange] = useState();
  const updateValue = (event) => {
    setOnChange(event.target.value);
  };
  return (
    <>
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
          onChange={updateValue}
          label="Sender Name"
          variant="outlined"
        />
      </Box>
    </>
  );
};
export default GiftSender;
