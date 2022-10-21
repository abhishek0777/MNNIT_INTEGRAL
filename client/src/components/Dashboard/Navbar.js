import React, { useEffect, useState } from 'react'
import {AppBar,Toolbar,styled,Box,Button,Avatar,Menu,MenuItem,ListItemIcon,Divider,IconButton,Typography,Tooltip} from '@mui/material'


// import icons
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import MNNITIntegralLogo from '../MNNITIntegralLogo'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Icons=styled(Box)({
    display:"flex",
    alignItems:"end",
    gap:"20px"
})

const StyledButton=styled(Button)({
    background:"transparent",
    color:"#ffffff"
})

const Navbar = () => {
    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const student=useSelector((state)=>state.student)
    function onLogout(){
      localStorage.removeItem('student')
      dispatch({type:'GET_ACCOUNT',payload:{}})
      navigate('/')
    }
  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <MNNITIntegralLogo/>
            <Icons>
                
                <StyledButton variant="outlined"  startIcon={<HomeIcon />} href="/">Home</StyledButton>
                <StyledButton variant="outlined"  startIcon={<NotificationsActiveIcon />}>Notifications</StyledButton>
                <StyledButton variant="outlined"  startIcon={<MarkUnreadChatAltIcon />}>Messages</StyledButton>
                <StyledButton variant="outlined"  startIcon={<Avatar sx={{width:20,height:20}} alt={student.name} src={student.picture} />}>Profile</StyledButton>
                <StyledButton variant="outlined"  startIcon={<LogoutIcon />} onClick={onLogout}>Logout</StyledButton>
                
            </Icons>
        </StyledToolbar>
        
    </AppBar>
  )
}

export default Navbar