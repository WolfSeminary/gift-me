import { CardContent, Typography, CardMedia,Card } from '@mui/material';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';


export default function Category() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="myPicture"
                height="140"
                image="./C0000850.JPG"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    hellow i'm in Typography
                </Typography>
            </CardContent>
        </Card>

    )
}

