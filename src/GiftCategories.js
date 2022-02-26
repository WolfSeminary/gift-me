import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function GiftCategories({ selectedCategory, setSelectedCategory }) {
    
  const onSelectedCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={selectedCategory}
          onChange={onSelectedCategoryChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled hidden>
            <em>Category</em>
          </MenuItem>
          <MenuItem value={1}>Food</MenuItem>
          <MenuItem value={2}>Attractions</MenuItem>
          <MenuItem value={3}>Gift Cards</MenuItem>
          <MenuItem value={4}>Toys</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default GiftCategories;
