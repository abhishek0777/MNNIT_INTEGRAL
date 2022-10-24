import { Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'
import buyandsell from '../../../images/buyandsell.svg'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CallIcon from '@mui/icons-material/Call';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Item = ({item}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.picture}
      />
      <Chip size="small" sx={{mt:1,ml:0.5}} icon={<LocalOfferIcon/>} label={item.tag} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography sx={{mt:1}} gutterBottom variant="h6" component="div">
        <Chip variant="outlined"color="info" icon={<CurrencyRupeeIcon/>} label={item.price} />
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <Chip variant="outlined" color="success" icon={<CallIcon/>} label={item.contact} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default Item