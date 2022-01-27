import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const FindGift = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      onClick={() => {
        navigate(`categories`);
      }}
    >
      Find a Gift
    </Button>
  );
};
export default FindGift;
