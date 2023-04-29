import { Avatar, Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import ReactImageFileToBase64 from "react-file-image-to-base64";
import { postingAPost } from '../../../actions/pages';

const Page = ({page,handlePostt}) => {

  const student=useSelector((state)=>state.student)
  const [post,setPost]=useState({
    content:"",
    images:[]
  })
  const handleOnCompleted=files=>{
    let base64s=[]
    files.map(file=>base64s.push(file.base64_file))
    setPost({...post,images:base64s})
  }

  const dispatch=useDispatch()
  
  function handlePost(){
    const obj={
        ...post,
        username:student.name,
        userimage:student.picture,
        likes:[]
    }
    dispatch(postingAPost(page._id.toString(),obj))
  }
  
  return (
    <>
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
    <Card sx={{m:5, display:'flex'}}>
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
    </Card>
    {page.posts.length}
    </>
  )
}

export default Page