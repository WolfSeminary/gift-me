import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const GiftNote = ({ onChange, value }) => {
  const [onChange1, setOnChange] = useState();
  const updateValue = (event) => {
    setOnChange(event.target.value);
    console.log(onChange1);
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
          value={value}
          onChange={onChange}
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
