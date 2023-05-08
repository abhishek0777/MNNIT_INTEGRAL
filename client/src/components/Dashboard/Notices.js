import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactImageFileToBase64 from "react-file-image-to-base64";
import noticesImg from '../../images/notices.svg'
import noticeImg from '../../images/notice.png'
import { useDispatch, useSelector } from 'react-redux';
import { getNotices, postNotice } from '../../actions/notices.js';
import moment from 'moment';
import SendIcon from '@mui/icons-material/Send';
import textureImage from '../../images/texture.jpg'
import textureImage1 from '../../images/texture1.jpg'


const Notices = () => {

  const initialNotice={
    description:"",
    file:""
  }

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getNotices())
  })
  
  const notices=useSelector((state)=>state.notices)
  const student=useSelector((state)=>state.student)

  const [notice,setNotice]=useState(initialNotice)

  const handleOnCompleted=files=>{
    let base64s
    files.map(file=>base64s=file.base64_file)
    setNotice({...notice,file:base64s})
  }
  function onSubmit(){
    dispatch(postNotice(notice))
    setNotice(initialNotice)
  }
  return (
    <>
    <Card sx={{m:2,display:'flex',backgroundImage:`url(${textureImage})`}}>
      <CardContent sx={{m:0}}>
          <Typography gutterBottom variant="h5" component="div">
            Notice section
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The notice board of a college is a central location for sharing important information with students, faculty, and staff. It typically includes notices about upcoming events, class schedules, academic deadlines, and other important announcements.
          </Typography>
          {(student.isAdmin)&&<Grid container sx={{p:1}} spacing={3}>
            <Grid item xs={12} md={4} sx={{mt:2}}>
              <TextField
                id="Outlined" 
                label="Description" 
                sx={{width:'100%'}} 
                focused 
                multiline 
                maxRows={4}
                value={notice.description}
                onChange={(e)=>setNotice({...notice,description:e.target.value})}
                />
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:2}}>
                <ReactImageFileToBase64
                    multiple={false}
                    onCompleted={handleOnCompleted}
                    preferredButtonText='Upload Notice'
                />
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:2}}>
              <Button variant="contained" onClick={onSubmit} startIcon={<SendIcon/>}>Send Notice</Button>
            </Grid>
          </Grid>}
          
      </CardContent>
      
      <CardMedia
        component="img"
        sx={{ width: 250, mr:0,ml:"auto"}}
        image={noticesImg}
        alt="Live from space album cover"
      />
    </Card>
    <Paper sx={{m:2,p:1,backgroundImage:`url(${textureImage1})`}}>
      <Grid 
        container 
        spacing={2} 
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {notices.map(item=>
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 250 }}>
              <CardMedia
                component="img"
                alt="card image"
                height="160"
                image={noticeImg}
              />
              <CardContent>
                <Typography variant="h6">
                  {item.description}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {moment(item.createdAt).fromNow()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="error" variant="contained" href={item.file} download>Download</Button>
              </CardActions>
            </Card>
        </Grid>)}
      </Grid>
    </Paper>
    </>
  )
}

export default Notices