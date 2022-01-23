import AppBar from './AppBar';
import WhoGetTheGift from './WhoGetTheGift';
import GiftRecipient from './GiftRecipient';
import GiftSender from './GiftSender';
import GiftNote from './GiftNote';
import BuyGift from './BuyGift';
import { Grid } from '@mui/material';

const BuyGiftPage = () => {
    return (
        <Grid container spacing={3} margin={2}>
            <AppBar />
            <Grid item xs={12} justifySelf='flex-end'>
                <WhoGetTheGift />
            </Grid>
            <Grid item xs={6}>
                <GiftRecipient />
            </Grid>
            <Grid item xs={6}>
                <GiftSender />
            </Grid>
            <Grid item xs={12}>
                <GiftNote />
            </Grid>
            <Grid item xs={12} justifyItems='center'>
                <BuyGift />
            </Grid>
        </Grid>
    )
}
export default BuyGiftPage;
