import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function GiftDetailed({ gift }) {
  const navigate = useNavigate();

  const navigateBuyGift = () => {
    navigate("/buyGift", { state: gift });
  };

  return (
    <>
       <Card sx={{ maxWidth: 800, margin: "auto" }}>
        <Typography component="div">
          <Box sx={{ textAlign: "right", m: 1 }}>
            <CardHeader title={gift.giftPrice} />
          </Box>
        </Typography>
        <CardMedia
          style={{ height: 550 }}
          component="img"
          height="194px"
          image={gift.image}
          alt="gift image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {gift.name}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            onClick={navigateBuyGift}
            variant="contained"
            disableElevation
          >
            CHOOSE
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
