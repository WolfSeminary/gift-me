import Gift from "./Gift";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useParams } from 'react-router-dom';

export default function Gifts() {   
    let { id: categoryId } = useParams();
    const navigate = useNavigate();
    const onGiftClick = () => {
        navigate(`gifts/${categoryId}`);
    }
    const [gifts, setGifts] = useState([
        { id: 1,categoryID:1, name: "gift1", image: "./SSGP0149.JPG" },
        { id: 2,categoryID:1, name: "gift2", image: "./SSGP0149.JPG" },
        { id: 3,categoryID:1, name: "Gift", image: "./SSGP0149.JPG" },
        { id: 4,categoryID:1, name: "gift3", image: "./SSGP0149.JPG" },
    ]);
    console.log(gifts)
    return (
        <Box sx={{ flexGrow: 1, margin: 3 }}>
            <Grid container spacing={2}>
                {gifts.filter(item => item.categoryID == categoryId || categoryId == null).map((gift) => (
                    <Grid gift xs={6} key={gift.id} textAlign={"center"} md={6}>
                        <div onClick={onGiftClick}>
                            <Gift key={gift.id} myGift={gift} />
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
