import React from "react";
import AppBar from "./AppBar";
import { Breadcrumbs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import GiftDetailed from "./GiftDetailed";

const categoriesName = {
  1: "Food",
  2: "Attractions",
  3: "Gift Cards",
  4: "Toys",
};

const GiftPage = () => {
  const location = useLocation();
  const gift = location.state;

  return (
    <>
      <AppBar />
      <Breadcrumbs separator=">">
        <Link to="/Categories">Categories</Link>,
        <Link to={`/category/${gift.categoryID}`}>
          {categoriesName[gift.categoryID]}
        </Link>
        {gift.giftName}
      </Breadcrumbs>
      <GiftDetailed gift={gift}/>
    </>
  );
};
export default GiftPage;
