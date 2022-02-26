import React from "react";
import { Route, Routes } from "react-router-dom";
import Gifts from "./Gifts";
import BuyGiftPage from "./BuyGiftPage";
import GiftsPage from "./GiftsPage";
import CategoriesPage from "./CategoriesPage";
import HomePage from "./Homepage";
import GiftPage from "./GiftPage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/category/:categoryId" element={<GiftsPage />} />
      <Route path="/buyGift" element={<BuyGiftPage />} />
      <Route path="/gifts" element={<Gifts />} />
      <Route path="/gift/:giftId" element={<GiftPage />} />
    </Routes>
  );
};
export default Navigation;
