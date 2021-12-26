// import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GiftCategories() {
    const [categoria, setCategoria] = React.useState('');

    const handleChange = (event) => {
        setCategoria(event.target.value);
    };

    return (



        <div>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={categoria}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="" disabled hidden>
                        <em>Category</em>
                    </MenuItem>
                    <MenuItem value={10}>Food</MenuItem>
                    <MenuItem value={20}>Attractions</MenuItem>
                    <MenuItem value={30}>Gift Cards</MenuItem>
                    <MenuItem value={40}>Toys </MenuItem>

                </Select>
            </FormControl>
        </div >

    );
}
