import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'

const GiftRecipient = ({ giftRecipient }) => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Recipient Name" variant="outlined" value={giftRecipient} />
        </Box>
    )
}

export default GiftRecipient;
