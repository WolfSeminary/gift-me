import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

const WhoGetTheGift = ({ whoGetTheGift }) => {
    return (
        <>
            <Typography variant="h5">Who gets the gift?</Typography>
            <ToggleButtonGroup >
                <ToggleButton value={whoGetTheGift} >
                    A Friend
                </ToggleButton>
                <ToggleButton value={whoGetTheGift} >
                    To myself
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default WhoGetTheGift;