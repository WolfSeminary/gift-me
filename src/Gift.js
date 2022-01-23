import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Gift = ({ myGift }) => {
  console.log(myGift)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={myGift.image}
        alt="picture"
      />
      <CardContent>
        <div></div>
        <Typography
          borderRadius="16%"
          sx={{ borderRadius: 16 }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {myGift.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Gift;
