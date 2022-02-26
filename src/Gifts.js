import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Gift from "./Gift";
import { useNavigate } from "react-router";

function Gifts({ categoryId }) {
  const navigate = useNavigate();
  const onGiftClick = (gift) => {
    navigate(`/gift/${categoryId}`, { state: gift });
  };
  const gifts = [
    { GiftID: 11, categoryID: 1, name: "Brunch", image: "../images/Brunch.jpg" },
    { GiftID: 12, categoryID: 1, name: "Lunch", image: "../images/Lunch.jpg" },
    { GiftID: 21, categoryID: 2, name: "Zoo", image: "../images/Zoo.jpg" },
    {
      GiftID: 22,
      categoryID: 2,
      name: "Museum",
      image: "../images/Museum.jpeg",
    },
    { GiftID: 31, categoryID: 3, name: "Ikea", image: "../images/Ikea.png" },
    { GiftID: 32, categoryID: 3, name: "Laline", image: "../images/Laline.png" },
    {
      GiftID: 41,
      categoryID: 4,
      name: "Playmobil",
      image: "../images/Playmobil.png",
    },
    { GiftID: 42, categoryID: 4, name: "Lego", image: "../images/Lego.jpg" },
  ];

  return (
    <Box sx={{ flexGrow: 1, margin: 3 }}>
      <Grid container spacing={2}>
        {gifts
          .filter((item) => item.categoryID === +categoryId)
          .map((gift) => (
            <Grid
              gift
              xs={6}
              key={gift.id}
              textAlign={"center"}
              md={6}
              onClick={() => onGiftClick(gift)}
            >
              <Gift myGift={gift} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default Gifts;
