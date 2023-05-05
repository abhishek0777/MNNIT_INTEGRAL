import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPages, likeAPost } from '../../actions/pages'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Paper, Typography } from '@mui/material'
import feed from '../../images/feed.png'
import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Carousel from 'react-material-ui-carousel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import moment from 'moment'
import EventIcon from '@mui/icons-material/Event';

const Feed = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAllPages())
  },[dispatch])

  const pages=useSelector((state)=>state.pages)
  const student=useSelector((state)=>state.student)
  let posts=[]
  const [Posts,setPosts]=useState([])
  for(let i=0;i<pages.length;i++){
    for(let j=0;j<pages[i].posts.length;j++){
      let post=pages[i].posts[j];
      post={...post,
      pageID:pages[i]._id.toString(),
      name:pages[i].name
      }
      posts.push(post)
    }
  }
  posts.sort(function(a,b){
    return new Date(b.date)-new Date(a.date)
  })

  function handleLikeAPost(pageID,postID,userID){
    dispatch(likeAPost(pageID,postID,userID))
    for(let i=0;i<posts.length;i++){
      if(posts[i]._id.toString()===postID){
        if(posts[i].likes.includes(userID)===false)
          posts[i].likes.push(userID)
        else posts[i].likes.splice(posts[i].likes.indexOf(userID),1)
      }
    }
  }
  return (
    <>
      <Card sx={{m:2,display: 'flex'}}>
        <CardContent sx={{m:0}}>
            <Typography gutterBottom variant="h4" component="div">
              Write a blog for community
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit in velit interdum ornare. Proin malesuada, nisi vel fringilla euismod, magna massa congue lacus, eget commodo magna elit at dui. Curabitur accumsan vel velit vel accumsan. Sed congue ipsum et eleifend mollis. Sed dapibus velit vel lacinia malesuada. Integer vitae vestibulum ante. In hac habitasse platea dictumst. Sed tincidunt, metus id egestas fringilla, quam leo rutrum ipsum, eu aliquet nisi nisi et nulla.
            </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 250, mr:0,ml:"auto"}}
          image={feed}
          alt="Live from space album cover"
        />
      </Card>

      <Paper sx={{m:2,alignItems:'center',justifyContent:'center'}}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
      {posts.map(item=>
        <Grid item xs={12}>
        <Card key={item._id} sx={{m:1,width:400}}>
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
            subheader={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" color="grey" component="div">
            {item.content}
          </Typography>
          <Typography gutterBottom variant="body2" color="grey" component="div">
            <Button size="small" startIcon={<EventIcon/>}>{moment(item.date).format("MMM Do YY")}</Button>
          </Typography>
          
        </CardContent>
        {(item.images.length>0)&&<CardMedia sx={{m:5,alignItems:'center',justifyContent:'center'}}>
          <Carousel sx={{mt:0,height:'250px'}}>
            {item.images.map( (image, i) => <img key={i} src={image} style={{width:'270px',height:'260px'}}/> )}
          </Carousel>
          
        </CardMedia>}
          
        <CardActions>
          <Button startIcon={item.likes.includes(student._id.toString())?<FavoriteIcon/>:<FavoriteBorderIcon/>} onClick={()=>handleLikeAPost(item.pageID,item._id.toString(),student._id.toString())}>{item.likes.length}</Button>
        </CardActions>
        </Card>
        </Grid>)}
        </Grid>
        </Paper>
    </>
  )
}

export default Feed
// onClick={()=>handleLikeAPost(page._id.toString(),item._id.toString(),student._id.toString())}