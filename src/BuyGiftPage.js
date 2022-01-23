import React, { useState } from 'react';
import AppBar from './AppBar';
import WhoGetTheGift from './WhoGetTheGift';
import GiftRecipient from './GiftRecipient';
import GiftSender from './GiftSender';
import GiftNote from './GiftNote';
import BuyGift from './BuyGift';
import { Grid } from '@mui/material';

const BuyGiftPage = () => {
    const [whoGetsTheGift, setWhoGetsTheGift] = useState('a friend');
    const [giftRecipient, setGiftRecipient] = useState();
    const [giftSender, setGiftSender] = useState();
    const [giftNote, setGiftNote] = useState();

    return (
        <Grid container spacing={3} margin={2}>
            <AppBar />
            <Grid item xs={12} justifySelf='flex-end'>
                <WhoGetTheGift whoGetsTheGift={whoGetsTheGift} />
            </Grid>
            <Grid item xs={6}>
                <GiftRecipient giftRecipient={giftRecipient} />
            </Grid>
            <Grid item xs={6}>
                <GiftSender giftSender={giftSender} />
            </Grid>
            <Grid item xs={12}>
                <GiftNote giftNote={giftNote} />
            </Grid>
            <Grid item xs={12} justifyItems='center'>
                <BuyGift />
            </Grid>
        </Grid>
    )
}
export default BuyGiftPage;
