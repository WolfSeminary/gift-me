import React from "react";
import { useState } from "react";
import GiftPreview from "./GiftPreview";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function BuyGift({ info }) {
  const [shouldShowPreview, setShouldShowPreview] = useState(false);
  const handleClose = () => setShouldShowPreview(false);

  function onBuyGiftClick() {
    setShouldShowPreview(!shouldShowPreview);
  }
  return (
    <>
      <Button variant="contained" disableElevation onClick={onBuyGiftClick}>
        Buy Gift
      </Button>
      <Modal open={shouldShowPreview} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            <GiftPreview info={info} />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
