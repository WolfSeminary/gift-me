import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

const WhoGetTheGift = () => {
    return (
        <>
            <Typography variant="h5">
                <h5>Who gets the gift?</h5>
                <ToggleButtonGroup >
                    <ToggleButton value="To someone else" >
                        To someone else
                    </ToggleButton>
                    <ToggleButton value="To myself" >
                        To myself
                    </ToggleButton>
                </ToggleButtonGroup>
            </Typography>
        </>
    )
}

export default WhoGetTheGift;