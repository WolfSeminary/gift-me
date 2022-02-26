import React from "react";
import { useParams } from "react-router";
import AppBar from "./AppBar";
import Gifts from "./Gifts";

const GiftsPage = () => {
  const { categoryId } = useParams();

  return (
    <>
      <AppBar />
      <Gifts categoryId={categoryId} />
    </>
  );
};
export default GiftsPage;
