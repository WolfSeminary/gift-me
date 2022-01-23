import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const GiftNote = ({ giftNote }) => {
  return (<>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Gift Note" variant="outlined" value={giftNote} multiline rows={5} style={{ width: 600 }} fullWidth />
    </Box>
  </>)
}
export default GiftNote