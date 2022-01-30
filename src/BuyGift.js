import * as React from 'react';
import { useState } from 'react';
import GiftPreview from './GiftPreview';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};
const BuyGift = () => {
   const [shouldShowPreview, setShouldShowPreview] = useState(false);
   const handleClose = () => setShouldShowPreview(false);
   function onBuyGiftClick() {
      setShouldShowPreview(true);
   }
   return (
      <>
         <Button variant="contained" disableElevation onClick={onBuyGiftClick}>
            Buy Gift
         </Button>
        <Modal open={shouldShowPreview}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  <GiftPreview info={{id:2,name:"gift card", image: "./SSGP0149.JPG" }} />
               </Typography>
            </Box>
         </Modal>
      </>
   )
}

export default BuyGift
