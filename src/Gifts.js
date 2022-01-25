import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Gift from "./Gift";

export default function Gifts() {
    const [gifts, setGifts] = useState([
        { GiftID: 11, categoryID: 1, name: 'Brunch', image: "./images/Brunch.jpg" },
        { GiftID: 12, categoryID: 1, name: 'Lunch', image: "./images/Lunch.jpg" },
        { GiftID: 21, categoryID: 2, name: 'Zoo', image: "./images/Zoo.jpg" },
        { GiftID: 22, categoryID: 2, name: 'Museum', image: "./images/Museum.jpeg" },
        { GiftID: 31, categoryID: 3, name: 'Ikea', image: "./images/Ikea.png" },
        { GiftID: 32, categoryID: 3, name: 'Laline', image: "./images/Laline.png" },
        { GiftID: 41, categoryID: 4, name: 'Playmobil', image: "./images/Playmobil.gif" },
        { GiftID: 42, categoryID: 4, name: 'Lego', image: "./images/Lego.jpg" }
    ]);
    console.log(gifts)
    return (
        <Box sx={{ flexGrow: 1, margin: 3 }}>
            <Grid container spacing={2}>
                {gifts.filter(item => item.categoryID == categoryId || categoryId == null).map((gift) => (
                    <Grid gift xs={6} key={gift.id} textAlign={"center"} md={6}>
                        <Gift key={gift.id} myGift={gift} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
