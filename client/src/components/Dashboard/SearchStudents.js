import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Paper, Skeleton, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import searchStudent from '../../images/searchStudent.svg'
import {getAccounts,viewProfile} from '../../actions/student.js'
import { useDispatch, useSelector } from 'react-redux'
import { Stack } from '@mui/system'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'

import '../../assets/css/searchStudents.css'

const SearchStudents = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAccounts())
  },[])

  const students=useSelector((state)=>state.students)
  const navigate=useNavigate()
  function handleClick(account){
    dispatch(viewProfile(account))
    navigate('/dashboard/search-students/student')
  }

  const [searchText,setSearchText]=useState("")
  let cnt=0;
  return (
    <>
      
    <div>
      <Card sx={{m:2,display: 'flex'}}>
      <CardContent sx={{m:0}}>
          <Typography gutterBottom variant="h5" component="div">
            Search Student
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Type name,and it will give you all the students with name and their branch to help you find exact student. You can check their portfolio directly from here.
          </Typography>
          <TextField 
            sx={{mt:4,width:'100%'}} 
            label="Type name here..." 
            variant="outlined" 
            focused
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            />
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 200, mr:0,ml:"auto"}}
        image={searchStudent}
        alt="Live from space album cover"
      />
    </Card>
    {/* (account.name.substring(0,searchText.length).toUpperCase()===searchText.toUpperCase()) */}
    <Paper sx={{m:2}}>
      {students.length===0 && <CustomizedSkeleton/>}
      {students.map((account)=>
        {
          let show=(account.name.substring(0,searchText.length).toUpperCase()===searchText.toUpperCase())
          if(show===false){
            if(searchText==="")show=true
          }
          if(show){
            cnt++;
            return <Card sx={{m:1,p:2,maxWidth:600}}>
              <CardHeader
                avatar={
                  <Avatar
                  src={account.picture}
                  sx={{width:80,height:80}}
                  />
                }
                action={
                  <Button  onClick={()=>handleClick(account)}>Profile</Button>
                }
                title={account.name}
                subheader={account.branch}
              />
            </Card>
          }
        }
      )}
      {cnt===0 && <Card sx={{m:1,p:2,maxWidth:600}}>
      <Typography variant="h5" gutterBottom>
        Oops! No user exist with this name
      </Typography>
      </Card>

      }
      
    </Paper>
    </div>
    </>
  )
}


const CustomizedSkeleton=()=>{
  
  return (
    <>
    {[...Array(10)].map((e)=><Typography component="div" variant="h2"><Skeleton sx={{width:'90%',m:3}} animation="wave" /></Typography>)}
    </>
  )
  
}




export default SearchStudents