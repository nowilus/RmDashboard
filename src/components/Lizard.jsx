import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AlertDialogSlide from './DialogBox';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';


export default function ImgMediaCard() {
    const urlId = com_ibm_bpm_coach.getManagedAssetUrl("model-3.jpg", com_ibm_bpm_coach.assetType_WEB);
  return (
    <Card sx={{ maxWidth: 345, gridColumnStart: 1, gridColumnEnd: 4 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={urlId}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='text' startIcon={<ShareOutlinedIcon />}>Share</Button>
        <Button size="small" variant='text' startIcon={<LightbulbOutlinedIcon />}>Learn More</Button>
        <AlertDialogSlide />
      </CardActions>
    </Card>
  );
}