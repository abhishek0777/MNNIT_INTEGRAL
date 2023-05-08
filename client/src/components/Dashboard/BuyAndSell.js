import { Avatar, Box, Button, Card, CardContent, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64'
import buyandsell from '../../images/buyandsell.svg'
import FolderIcon from '@mui/icons-material/Folder';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getAllItems } from '../../actions/items';
import Item from './Item/Item';
import textureImage from '../../images/texture.jpg'
import textureImage1 from '../../images/texture1.jpg'
// backgroundImage:`url(${textureImage})`

const BuyAndSell = () => {
  const student=useSelector((state)=>state.student)

  const [openDialog,setOpenDialog]=useState(false)
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  
  const initialItemState={
    name:"",
    description:"",
    tag:"",
    price:"",
    contact:"",
    picture:""
  }
  const [itemData,setItemData]=useState(initialItemState)

  const dispatch=useDispatch()
  const items=useSelector((state)=>state.items)
  useEffect(()=>{
    dispatch(getAllItems())
  },[dispatch])

  function handleAddItem(){
    const newItem={author:student._id,...itemData}
    console.log(newItem)
    dispatch(addItem(newItem))
    setItemData(initialItemState)
    handleDialogClose()
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const tags=[
    "Cycle",
    "Cycle lock",
    "Electric Kettle",
    "Room lock with 1 key",
    "Room lock with 2 keys",
    "Room lock with 3 keys",
    "Mattress",
    "Pillow",
    "Book",
    "Mosquito net",
    "Water container (<=5L)",
    "Cooler",
    "Unused notebooks",
    "Rope",
    "Cutlery",
    "Iron",
    "Drafter",
    "Scientific calculator",
    "Stationery",
    "Bed table",
    "Table fan"
  ]
  tags.sort()

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [itemTags, setItemTags] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItemTags(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  
  const filteredItems=itemTags.length!==0?items.filter(filterFunction):items
  function filterFunction(item){
    return itemTags.indexOf(item.tag)!==-1
  }
  return (
  <>
    <Card sx={{m:2,display: 'flex',backgroundImage:`url(${textureImage})`}}>
      <CardContent sx={{m:0}}>
          <Typography gutterBottom variant="h5" component="div">
            Add an item to sell
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Do you have any item which you want sell, this is the good place where you can add your items and attract buyers and they will contact you directly.
          </Typography>
          <Button variant="contained" sx={{mt:5}} onClick={handleDialogOpen}>Add Item</Button>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 200, mr:0,ml:"auto"}}
        image={buyandsell}
        alt="Live from space album cover"
      />
    </Card>

    <Card sx={{m:2,backgroundImage:`url(${textureImage})`}}>
      <CardContent>
        <FormControl sx={{width:'100%'}}>
          <InputLabel id="demo-multiple-chip-label">Filter Items</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={itemTags}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Filter items" />}
            sx={{width:'100%',backgroundColor:'#FFF'}}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {tags.map((tag) => (
              <MenuItem
                key={tag}
                value={tag}
                style={getStyles(tag, itemTags, theme)}
              >
                {tag}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
      </CardContent>
    </Card>

    <Paper sx={{m:2,p:1,backgroundImage:`url(${textureImage1})`}}>
      <Grid 
        container 
        spacing={2} 
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {filteredItems.map(item=>
        <Grid item xs={12} sm={6} md={4}>
            <Item key={item._id} item={item}/>
        </Grid>)}
      </Grid>
    </Paper>

    <Dialog
    open={openDialog}
    onClose={handleDialogClose}
    scroll='paper'
    >
    <DialogTitle id="scroll-dialog-title">Item add section</DialogTitle>
    <DialogContent dividers={true}>
      <DialogContentText
        id="scroll-dialog-description"
        tabIndex={-1}
      >
        {[...new Array(1)]
          .map(
            () => `Add your item details here, please make sure to provide photo of an item, suitable price to sell it fast and valid contact number of yours or someone who can deal with buyers.`,
          )
          .join('\n\n\n')}

      </DialogContentText>
      <div>
          <TextField 
          id="Outlined" 
          label="Item Name" 
          sx={{width:'100%',mt:2}} 
          // focused 
          multiline 
          maxRows={4}
          value={itemData.name}
          onChange={(e)=>setItemData({...itemData,name:e.target.value})}
          />
          <TextField 
          id="Outlined" 
          label="Item Description" 
          sx={{width:'100%',mt:2}} 
          // focused 
          multiline 
          maxRows={4}
          value={itemData.description}
          onChange={(e)=>setItemData({...itemData,description:e.target.value})}
          />

          <FormControl sx={{width:'100%',mt:2}}>
          <InputLabel id="demo-simple-select-label">Item Tag</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={itemData.tag}
            label="Item Tag"
            onChange={(e)=>setItemData({...itemData,tag:e.target.value})}
            focused
            MenuProps={MenuProps}
          >
            {tags.map(tag=>
            <MenuItem value={tag}>{tag}</MenuItem>
            )}

          </Select>
          </FormControl>

          <FormControl sx={{width:'100%',mt:2}}>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={itemData.price}
            onChange={(e)=>setItemData({...itemData,price:e.target.value})}
            startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
            label="Amount"
          />
          </FormControl>

          <FormControl sx={{width:'20ch',mt:2}}>
          <InputLabel htmlFor="outlined-adornment-amount">Contact Number</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={itemData.contact}
            onChange={(e)=>setItemData({...itemData,contact:e.target.value})}
            startAdornment={<InputAdornment position="start">+91</InputAdornment>}
            label="Contact Number"
          />
          </FormControl> 

          <div>
          <Avatar sx={{mt:2}}>
            <FolderIcon/>
          </Avatar>
          <FileBase 
            type="file" 
            multiple={false}
            onDone={({base64})=>setItemData({...itemData,picture:base64})}
          /> 
          </div> 

          <Button variant="contained" size="large" sx={{width:'100%',mt:2}} onClick={handleAddItem}>Add Item</Button>      
          
      </div>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleDialogClose}>Close</Button>
    </DialogActions>
    </Dialog>
  </>
  )
}

export default BuyAndSell