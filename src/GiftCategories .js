// import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function GiftCategories() {
    const [categoria, setCategoria] = React.useState('');

    const handleChange = (event) => {
        setCategoria(event.target.value);
        
    };
    function onCategoryClick (event){
        let x=event;
        console.log(x);
        <BrowserRouter>
        <Routes>
    {/* <Route path="/client/:clientId" component={Client} /> */}
    {/* //       <Route path="/" element={<App />}>
    //         <Route index element={<Home />} />
    //         <Route path="food" element={<Food />}>
    //           <Route path=":attractions" element={<Attractions />} />
    //           <Route path="new" element={<GiftCards />} />
    //           <Route index element={<LeagueStandings />} />
    //         </Route>
    //       </Route> */}
       </Routes>
       </BrowserRouter>
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
                    <MenuItem value={10}onClick={onCategoryClick("food") }>Food</MenuItem>
                    <MenuItem value={20}onClick={onCategoryClick("Attractions") }>Attractions</MenuItem>
                    <MenuItem value={30}onClick={onCategoryClick }>Gift Cards</MenuItem>
                    <MenuItem value={40}onClick={onCategoryClick }>Toys </MenuItem>

                </Select>
            </FormControl>
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
