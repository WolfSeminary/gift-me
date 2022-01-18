// import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Gift from './Gift';
import {

    Routes,
    Route,
    useNavigate
} from "react-router-dom";

export default function GiftCategories() {
    const [categoria, setCategoria] = React.useState('');
    const [categories, setCategories] = React.useState([
        { id: 1, name: 'Food' },
        { id: 2, name: 'Attractions' },
        { id: 3, name: 'Gift Cards' },
        { id: 4, name: 'Shopping' },
        { id: 5, name: 'Food' },
        { id: 6, name: 'Gift Cards' },
    ]);
    let navigate = useNavigate();
    const handleChange = (event) => {
        setCategoria(event.target.value);

    };
    function onCategoryClick(id) {

        navigate(`category/${id}`);
    }
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

                    {
                        categories.map((item) => (
                            <MenuItem key={item.id} value={item.id} onClick={() => onCategoryClick(item.id)}>{item.name}</MenuItem>))
                    }

                </Select>
            </FormControl>
            <Routes>
                <Route path="/category/:id" element={<Gift/>} />
                <Route path="/" element={<GiftCategories/>} />
            </Routes>

        </div >

    );
}



// import { render } from "react-dom";
// import {
//     BrowserRouter,
//     Routes,
//     Route
//   } from "react-router-dom";
  // import your route components too

//   render(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route index element={<Home />} />
//           <Route path="teams" element={<Teams />}>
//             <Route path=":teamId" element={<Team />} />
//             <Route path="new" element={<NewTeamForm />} />
//             <Route index element={<LeagueStandings />} />
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>,
//     document.getElementById("root")
//   );
