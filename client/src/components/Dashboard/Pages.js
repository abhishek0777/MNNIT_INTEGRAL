import React,{useEffect, useState} from 'react'
import pageRequestSVG from '../../images/pageRequest.svg'
import { Avatar, Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, FormControl, Grid, IconButton, ImageList, ImageListItem, InputAdornment, InputLabel, OutlinedInput, Paper, Select, Stack, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64'
import FolderIcon from '@mui/icons-material/Folder';
import { followPage, getAllPages, getPageRequests, likeAPost, pageRequest, postingAPost } from '../../actions/pages'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RecommendIcon from '@mui/icons-material/Recommend';
import PreviewIcon from '@mui/icons-material/Preview';
import GppGoodIcon from '@mui/icons-material/GppGood';
import ReactImageFileToBase64 from "react-file-image-to-base64";
import Page from './Page/Page'
import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Carousel from 'react-material-ui-carousel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CancelIcon from '@mui/icons-material/Cancel';
import moment from 'moment'

const Pages = () => {

  const student=useSelector((state)=>state.student)
  const pages=useSelector((state)=>state.pages)
  const pageRequests=useSelector((state)=>state.pageRequests)

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getPageRequests())
  },[dispatch])
  const [openDialog,setOpenDialog]=useState(false)
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const initialRequest={
    pageName:"",
    description:"",
    why:"",
    contact:"",
    reasonToReject:"",
    isCreated:false,
    pageAdminID:student._id.toString,
    pageAdminName:student.name,
    image:""
  }

  const [request,setRequest]=useState(initialRequest)

  
  function sendRequest(){
    dispatch(pageRequest({...request,pageAdminID:student._id.toString(),pageAdminName:student.name}))
    handleDialogClose()
  }

  useEffect(()=>{
    dispatch(getAllPages())
  },[dispatch])

  const [showPage,setShowPage]=useState(false)
  const [page,setPage]=useState({})
  function visibilityOfPage(item){
    setShowPage(!showPage)
    setPage(item)
  }

  function followPageFunction(pageID,studentID){
    const obj={
      pageID:pageID,
      studentID:studentID
    }
    dispatch(followPage(obj))
  }

  // Page
  const initialPost={
    content:"",
    images:[]
  }
  const [post,setPost]=useState(initialPost)
  const handleOnCompleted=files=>{
    let base64s=[]
    files.map(file=>base64s.push(file.base64_file))
    setPost({...post,images:base64s})
  }

  function handlePost(){
    const obj={
        ...post,
        username:student.name,
        userimage:student.picture,
        likes:[]
    }
    dispatch(postingAPost(page._id.toString(),obj))
    setPage({...page,posts:[obj,...page.posts]})
    setPost(initialPost)
  }

  function handleLikeAPost(pageID,postID,userID){
    dispatch(likeAPost(pageID,postID,userID))
    let posts=[];
    for(let i=0;i<page.posts.length;i++){
      if(page.posts[i]._id!==postID)posts.push(page.posts[i])
      else{
        if(page.posts[i].likes.includes(userID)===false)
        page.posts[i].likes.push(userID)
        else page.posts[i].likes.splice(page.posts[i].likes.indexOf(userID),1)
        posts.push(page.posts[i])
      }
    }

    setPage({...page,posts:[...posts]})
  }

  return (
    <>

    {showPage&&
      <Fab style={{position:'fixed',backgroundColor:'grey'}} sx={{mt:1}} onClick={()=>visibilityOfPage({})}>
        <ArrowBackIcon/>
      </Fab>}

    {!showPage&&<Card sx={{m:3,display: 'flex'}}>
      <CardContent sx={{m:0}}>
          <Typography gutterBottom variant="h5" component="div">
            Send a request for new page
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum sapien sapien, non eleifend orci interdum non. Donec molestie ligula lorem, ut vehicula dui hendrerit ut. Nulla dignissim hendrerit metus, id mollis justo elementum in. Vivamus euismod varius turpis vel porta. Integer ultrices a velit non ultricies.
          </Typography>
          <Button variant="contained" sx={{mt:5}} onClick={handleDialogOpen}>Send request</Button>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 200, mr:0,ml:"auto"}}
        image={pageRequestSVG}
        alt="Live from space album cover"
      />
    </Card>}

    <Dialog
    open={openDialog}
    onClose={handleDialogClose}
    scroll='paper'
    >
    <DialogTitle id="scroll-dialog-title">Request form for page creation</DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText
          id="scroll-dialog-description"
          tabIndex={-1}
        >
          {[...new Array(1)]
            .map(
              () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum sapien sapien, non eleifend orci interdum non. Donec molestie ligula lorem, ut vehicula dui hendrerit ut.`,
            )
            .join('\n\n\n')}

        </DialogContentText>
        <div>
            <TextField
            id="Outlined" 
            label="Page Name" 
            sx={{width:'100%',mt:2}} 
            // focused 
            multiline 
            maxRows={4}
            value={request.pageName}
            onChange={(e)=>setRequest({...request,pageName:e.target.value})}
            />
            <TextField 
            id="Outlined" 
            label="Page Description" 
            sx={{width:'100%',mt:2}} 
            // focused 
            multiline 
            maxRows={4}
            value={pageRequest.description}
            onChange={(e)=>setRequest({...request,description:e.target.value})}
            />
            <TextField 
            id="Outlined" 
            label="Why you need this page?" 
            sx={{width:'100%',mt:2}} 
            // focused 
            multiline 
            maxRows={4}
            value={pageRequest.why}
            onChange={(e)=>setRequest({...request,why:e.target.value})}
            />

            <FormControl sx={{width:'20ch',mt:2}}>
            <InputLabel htmlFor="outlined-adornment-amount">Contact Number</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={request.contact}
              onChange={(e)=>setRequest({...request,contact:e.target.value})}
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
              onDone={({base64})=>setRequest({...request,image:base64})}
            /> 
            </div> 

            <Button variant="contained" size="large" sx={{width:'100%',mt:2}} onClick={sendRequest}>Send request</Button>      
            
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Close</Button>
      </DialogActions>
    </Dialog>



    {/* Pages you've followed */}
    {!showPage&&<Paper sx={{m:3,p:1}}>
      <Typography variant="h5" gutterBottom>
        Pages you follow
      </Typography>
      <Grid
          container 
          spacing={2} 
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
      >
          {pages.map(item=>
          (item.followers.includes(student._id.toString()))&&
          <Grid key={item._id.toString()} item xs={12} sm={6} md={4}>
              {/*  */}
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={()=>visibilityOfPage(item)}>
                  <CardMedia
                      component="img"
                      alt="card image"
                      height="140"
                      image={item.image}
                  />
                  
                  <CardContent>
                      <Stack direction="row">
                        <GppGoodIcon/>
                        <Chip color="success" size="small" label="Followed"/>
                      </Stack>
                      
                      <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                      </Typography>
                  </CardContent>
                </CardActionArea>
                  
              </Card>
              {/*  */}
          </Grid>)}
      </Grid>
    </Paper>}


    {/* Rejected Request */}
    {!showPage&&<Paper sx={{m:3,p:1}}>
      <Typography variant="h5" gutterBottom>
        Rejected Request
      </Typography>
      <Grid
          container 
          spacing={2} 
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
      >
        {pageRequests.map(item=>
        (item.pending===false)&&(item.pageAdminID===student._id.toString())&&
        <Grid key={item._id} item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="card image"
                    height="140"
                    image={item.image}
                />
                
                <CardContent>
                    <Stack direction="row" spacing={1}>
                      <CancelIcon/>
                      <Chip color="error" size="small" label="Rejected"/>
                    </Stack>
                    
                    <Typography gutterBottom variant="h5" component="div">
                    {item.pageName}
                    </Typography>
                    <Typography gutterBottom variant="body1" color="grey" component="div">
                    Reason: {item.reasonToReject}
                    </Typography>
                </CardContent>
                
            </Card>
        </Grid>
        )}
      </Grid>
    </Paper>}

    {/* Pages you can follow */}
    {!showPage&&<Paper sx={{m:3,p:1}}>
    <Typography variant="h5" gutterBottom>
        Pages you may know
      </Typography>
      <Grid
          container 
          spacing={2} 
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
      >
          {pages.map(item=>
          (!item.followers.includes(student._id.toString()))&&
          <Grid key={item._id.toString()} item xs={12} sm={6} md={4}>
              {/*  */}
              <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                      component="img"
                      alt="card image"
                      height="140"
                      image={item.image}
                  />
                  
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                      </Typography>
                  </CardContent>

                  <CardActions>
                    <ButtonGroup variant="outlined">
                        <Button color="success" startIcon={<RecommendIcon/>} onClick={()=>followPageFunction(item._id.toString(),student._id.toString())}>Follow</Button>
                        <Button color="error" startIcon={<PreviewIcon/>} onClick={()=>visibilityOfPage(item)}>View</Button>
                    </ButtonGroup>
                  </CardActions>
              </Card>
              {/*  */}
          </Grid>)}
      </Grid>
    </Paper>}

    {showPage&&<>
    <Card sx={{m:5,display: 'flex'}}>
        <CardContent sx={{m:0}}>
            <Typography gutterBottom variant="h5" component="div">
                {page.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {page.description}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
                Admin: {page.admin}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
                Followers: {page.followers.length}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
                Posts: {page.posts.length}
            </Typography>
        </CardContent>
        <CardMedia
            component="img"
            sx={{ width: 370, mr:0,ml:"auto"}}
            image={page.image}
            alt="Live from space album cover"
        />
    </Card>

    {/* Form to post something */}
    {(page.admin===student._id.toString())&&<Card sx={{m:5, display:'flex'}}>
        <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item sx={{mt:1}} xs={1}>
                <Avatar src={student.picture} sx={{width:56,height:56}}/>
            </Grid>
            <Grid item sx={{mt:1,mb:0}} xs={8}>
                <TextField 
                    fullWidth 
                    label="Start a post" 
                    id="fullWidth" 
                    sx={{'& .MuiOutlinedInput-root': {
                        '& fieldset': {
                        borderColor: 'black',
                        borderRadius: 50,
                        }}
                    }}
                    onChange={(e)=>setPost({...post,content:e.target.value})}
                />
            </Grid>
            <Grid item xs={1}>
                <ReactImageFileToBase64
                    multiple={true}
                    onCompleted={handleOnCompleted}
                    preferredButtonText='Upload images'
                />
            </Grid>
            <Grid item xs={2}>
                <Button variant="outlined" onClick={handlePost}>Post</Button>
            </Grid>
        </Grid>
    </Card>}
    <Paper sx={{m:5,alignItems:'center',justifyContent:'center'}}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
    {page.posts.map(item=>
      <Grid item xs={12}>
      <Card key={item._id} sx={{m:1,width:300}}>
      <CardHeader
          avatar={
          <Avatar src={item.userimage} sx={{ bgcolor: red[500] }} aria-label="recipe"/>
          }
          action={
          <IconButton aria-label="settings">
              <MoreVertIcon />
          </IconButton>
          }
          title={item.username}
          subheader={moment(item.date).fromNow()}
      />
      <CardContent>
        <Typography gutterBottom variant="body2" color="grey" component="div">
          {item.content}
        </Typography>
      </CardContent>
      {(item.images.length>0)&&<CardMedia sx={{m:2,alignItems:'center',justifyContent:'center'}}>
        <Carousel sx={{mt:0,height:'250px'}}>
          {item.images.map( (image, i) => <img key={i} src={image} style={{width:'270px',height:'260px'}}/> )}
        </Carousel>
      </CardMedia>}

      <CardActions>
        <Button startIcon={item.likes.includes(student._id.toString())?<FavoriteIcon/>:<FavoriteBorderIcon/>} onClick={()=>handleLikeAPost(page._id.toString(),item._id.toString(),student._id.toString())}>{item.likes.length}</Button>
      </CardActions>
      </Card>
      </Grid>)}
      </Grid>
      </Paper>
    </>}
    </>
    
  )
}

export default Pages


    