// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// //import CardHeader from '@mui/material/CardHeader';
// import { Button, CardActionArea, CardActions } from '@mui/material';

// export default function MultiActionAreaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         {/* <CardHeader>
//           <h1>115</h1>
//         </CardHeader> */}
//         <CardMedia
//           component="img"
//           height="140"
//           // image="./branch.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//            branch
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//            branch
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="big" color="yellow">
//          choose
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
// import  React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea} from '@mui/material';

// import CardHeader from '@mui/material/CardHeader';


// export default function MultiActionAreaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//       <CardHeader

//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//         <CardMedia
//           component="img"
//           height="140"
//           image="/branch.JPG"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="big" color="yellow">
//        choose
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import zIndex from '@mui/material/styles/zIndex';
import '../GiftDetailed/Giftdetailed.css'




export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 250, height: 200 }}>


      <CardMedia
        component="img"
        height="140"
        image="/branch.JPG"
        alt="שניצל"
      />
      <CardHeader
        title={
          <Typography style={{ position: 'absolute', top: '3vh', left: '43vw', fontSize: '0.7rem' ,borderRadius:'2.5px',width:"8vw"}} gutterBottom bgcolor='white' textAlign='center' variant="h8" mt={-1} component="div">
            $115
          </Typography>
        }
      />
      <Card sx={{ width: 250, height: 100 }} style={{ backgroundColor: 'white', position: 'absolute', top: '20vh' }}   >
        <CardContent  >
          <Typography gutterBottom  textAlign='center' variant="h7" mt={-1} component="div">
            branch
          </Typography>
        </CardContent>
        <CardActions >
          <Button size="small" variant="contained"  style={{ backgroundColor: 'orange' }} fullWidth color="primary">
            choose
          </Button>
        </CardActions>
      </Card>

    </Card>
  );
}