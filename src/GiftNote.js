import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const GiftNote = () => {
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
          onChange={updateValue}
          id="outlined-basic"
          label="Gift Note"
          variant="outlined"
          multiline
          rows={5}
          style={{ width: 600 }}
          fullWidth
        />
      </Box>
    </>
  );
};
export default GiftNote;
