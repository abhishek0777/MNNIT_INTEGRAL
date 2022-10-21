import React from 'react'
import { Stack } from '@mui/material'
import Student from '../components/Student'
import Navbar from '../components/Dashboard/Navbar'
import Sidebar from '../components/Dashboard/Sidebar'
const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar/>
            <Student/>
        </Stack>
    </div>
  )
}

export default Dashboard