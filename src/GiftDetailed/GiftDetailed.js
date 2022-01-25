import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import "./Giftdetailed.css";
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import BuyGift from '../BuyGift'

export default function GiftDetailed() {
  const navigate = useNavigate();

  const navigateBuyGift = () => {
    navigate(`buygift`)
  }
  return (
    <>
      <Card sx={{ width: 250, height: 280, position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image="/branch.JPG"
          alt="שניצל"
        />
        <CardHeader
          title={
            <Typography
              sx={{
                top: "3vh",
                left: "8.5vw",
                fontSize: "0.7rem",
                borderRadius: "2.5px",
                position: "absolute",
                width: "3vw",
              }}
              gutterBottom
              bgcolor="white"
              textAlign="center"
              variant="h8"
              mt={-1}
              component="div"
            >
              $115
            </Typography>
          }
        />
        <Card
          sx={{ width: 250, height: 120, position: "absolute", top: "18vh" }}
        >
          <CardContent>
            <Typography
              gutterBottom
              textAlign="center"
              variant="h7"
              mt={-1}
              component="div"
            >
              branch
            </Typography>
          </CardContent>
          <CardActions>
            <Routes>
              <Route path="buygift" element={<BuyGift />} />
            </Routes>
            <Button onClick={navigateBuyGift} variant="contained" className="button" fullWidth>
              choose
            </Button>
          </CardActions>
        </Card>
      </Card>
    </>
  );
}
