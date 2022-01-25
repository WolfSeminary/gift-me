import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import GiftPreview from './GiftPreview';

const BuyGift = ({info}) => {
   const [shouldShowPreview, setShouldShowPreview] = useState(false);
   function onBuyGiftClick() {
      setShouldShowPreview(true);
   }
   return (
      <>
         <Button variant="contained" disableElevation onClick={onBuyGiftClick}>
            Buy Gift
         </Button>
         {shouldShowPreview && <GiftPreview info={info}/>}
      </>
   )
}

export default BuyGift
