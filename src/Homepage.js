import React, { useState } from "react";
import { Stack } from "@mui/material";
import GiftCategories from "./GiftCategories";
import FindGift from "./FindGift";
import AppBar from "./AppBar";

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <AppBar />
      <Stack direction="row" spacing={2}>
        <GiftCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <FindGift />
      </Stack>
    </>
  );
};
export default Homepage;
