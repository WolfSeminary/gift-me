import AppBar from "./AppBar";
import WhoGetTheGift from "./WhoGetTheGift";
import GiftRecipient from "./GiftRecipient";
import GiftSender from "./GiftSender";
import GiftNote from "./GiftNote";
import BuyGift from "./BuyGift";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const BuyGiftPage = () => {
  const location = useLocation();
  const gift = location.state;
  const [whoGetsTheGift, setWhoGetsTheGift] = useState("a friend");
  const [giftRecipient, setGiftRecipient] = useState();
  const [giftSender, setGiftSender] = useState();
  const [giftNote, setGiftNote] = useState();

  const onWhoGetsTheGiftChange = (event) => {
    setWhoGetsTheGift(event.target.value);
    console.log(whoGetsTheGift);
  };
  const onGiftRecipientChange = (event) => {
    setGiftRecipient(event.target.value);
    console.log(giftRecipient);
  };
  const onGiftSenderChange = (event) => {
    setGiftSender(event.target.value);
  };
  const onGiftNoteChange = (event) => {
    setGiftNote(event.target.value);
  };
  return (
    <Grid container spacing={3} margin={2}>
      <AppBar />
      <Grid item xs={12} justifySelf="flex-end">
        <WhoGetTheGift
          onChange={onWhoGetsTheGiftChange}
          value={whoGetsTheGift}
        />
      </Grid>
      <Grid item xs={6}>
        <GiftRecipient onChange={onGiftRecipientChange} value={giftRecipient} />
      </Grid>
      <Grid item xs={6}>
        <GiftSender onChange={onGiftSenderChange} value={giftSender} />
      </Grid>
      <Grid item xs={12}>
        <GiftNote onChange={onGiftNoteChange} value={giftNote} />
      </Grid>
      <Grid item xs={12} justifyItems="center">
        <BuyGift
          info={{
            ...gift,
            whoGetsTheGift,
            giftRecipient,
            giftSender,
            giftNote,
          }}
        />
      </Grid>
    </Grid>
  );
};
export default BuyGiftPage;
