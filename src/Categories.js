import React from "react";
import Category from "./Category";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router";

const categories = [
  { id: 1, name: "Food", image: "./images/food.jpg" },
  { id: 2, name: "Attractions", image: "./images/Attractions.jpg" },
  { id: 3, name: "Gift Cards", image: "./images/Gift Cards.png" },
  { id: 4, name: "Toys", image: "./images/Toys.jpg" },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: 3 }}>
        <Grid container spacing={2}>
          {categories.map((item) => (
            <Grid
              key={item.id}
              textAlign={"center"}
              item
              xs={6}
              md={6}
              onClick={() => navigate(`/category/${item.id}`)}
            >
              <Category category={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Categories;
