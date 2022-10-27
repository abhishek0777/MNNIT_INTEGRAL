import { Avatar, Box, Button, Card, CardContent, Grid, IconButton, Paper, styled, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64'
import FolderIcon from '@mui/icons-material/Folder';
import { useDispatch, useSelector } from 'react-redux';
import { createQuery, getAllQueries } from '../../actions/queries';
import Query from './Query/Query';

const Queries = () => {
  let student=useSelector((state)=>state.student)
  const dispatch=useDispatch()
  const [queryData,setQueryData]=useState({
    title:"",
    details:"",
    picture:""
  })

  const queries=useSelector((state)=>state.queries)

  useEffect(()=>{
    dispatch(getAllQueries())
  },[dispatch])

  function onSubmit(){
    const newQuery={...queryData,author:student.name}
    dispatch(createQuery(newQuery))
  }

  
  return (
    <>
    <Card sx={{m:2}}>
      <CardContent sx={{m:0}}>
          <Typography gutterBottom variant="h5" component="div">
            Post your Query
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
            Do you have a query? Query related to anything, be it any information, be it doubt related to academic subject or tips for internship & placement preparations.
          </Typography>
      </CardContent>
      <Grid container sx={{p:1}}>
        <Grid item xs={12} md={4} sx={{mt:2}}>
          <TextField 
            id="Outlined" 
            label="Title" 
            sx={{width:'80%'}} 
            focused 
            multiline 
            maxRows={4}
            value={queryData.title}
            onChange={(e)=>setQueryData({...queryData,title:e.target.value})}
            />
        </Grid>
        <Grid item xs={12} md={4} sx={{mt:2}}>
          <TextField 
            id="Outlined" 
            label="Details" 
            sx={{width:'80%'}} 
            focused 
            multiline 
            maxRows={4}
            value={queryData.details}
            onChange={(e)=>setQueryData({...queryData,details:e.target.value})}
            />
        </Grid>
        <Grid item xs={12} md={2} sx={{mt:2}}>
          <Avatar >
            <FolderIcon/>
          </Avatar>
          <FileBase 
            type="file" 
            multiple={false}
            onDone={({base64})=>setQueryData({...queryData,picture:base64})}
          />
        </Grid>
        <Grid item xs={12} md={2} sx={{mt:2}}>
          <Button variant="contained" onClick={onSubmit}>Post Query</Button>
        </Grid>
      </Grid>
      
    </Card>
    <Paper sx={{m:2,p:1}}>
      {queries.map(q=>{
        return <Query key={q._id} queryData={q}/> 
      })}
    </Paper>
    
    </>
  )
}

export default Queries