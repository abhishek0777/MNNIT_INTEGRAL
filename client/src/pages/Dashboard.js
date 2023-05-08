import React, { useEffect } from 'react'
import { Grid, Stack } from '@mui/material'
import Student from '../components/Student'
import Navbar from '../components/Dashboard/Navbar'
import Sidebar from '../components/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAccount } from '../actions/student'
import { blue,purple } from '@mui/material/colors';
const Dashboard = () => {
  const dispatch=useDispatch()
  
  useEffect(()=>{
      const loggedInStudent=localStorage.getItem('student')
      if(loggedInStudent)
      dispatch(getAccount(loggedInStudent))
  },[])
  return (
    <div>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <Grid container>
              <Grid item xs={12} sm={2}>
                <Sidebar/>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Outlet sx={{backgroundColor:purple[50]}}/>
              </Grid>
            </Grid>
        </Stack>
    </div>
  )
}

export default Dashboard