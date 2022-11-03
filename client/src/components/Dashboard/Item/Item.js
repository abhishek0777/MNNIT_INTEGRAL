import { Button, Card, CardActions, CardContent, CardMedia, Chip, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CallIcon from '@mui/icons-material/Call';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../../actions/items';
const Item = ({item}) => {
  const student=useSelector((state)=>state.student)

  const dispatch=useDispatch()
  function handleDelete(){
    dispatch(deleteItem(item._id.toString()))
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="card image"
        height="140"
        image={item.picture}
      />
      <Chip size="small" sx={{mt:1,ml:0.5}} icon={<LocalOfferIcon/>} label={item.tag} />
      {(student._id.toString()===item.author)&&(
        <Tooltip title="If Sold, delete it!">
          <IconButton sx={{float:"right",mr:0.5}} color="error" onClick={handleDelete}>
            <DeleteIcon/>
          </IconButton>
        </Tooltip>
      )}
      
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