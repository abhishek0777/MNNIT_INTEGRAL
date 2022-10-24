import React, { useEffect, useState } from 'react'
import {AppBar,Toolbar,styled,Box,Button,Avatar,Badge,Menu,MenuItem,ListItemIcon,Divider,IconButton,Typography,Tooltip} from '@mui/material'


// import icons
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import MNNITIntegralLogo from '../MNNITIntegralLogo'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { getAccount } from '../../actions/student';

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

const StyledLink=styled(Link)({
    textDecoration:"none",
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

    useEffect(()=>{
        const loggedInStudent=localStorage.getItem('student')
        if(loggedInStudent)
        dispatch(getAccount(loggedInStudent))
    },[dispatch])
  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <MNNITIntegralLogo/>
            <Icons>
                <StyledButton variant="outlined" startIcon={<HomeIcon />}><StyledLink to='/dashboard'>Home</StyledLink></StyledButton>
                <StyledButton variant="outlined"  startIcon={<Badge badgeContent={4} color="error"><NotificationsActiveIcon /></Badge>}>Notifications</StyledButton>
                <StyledButton variant="outlined"  startIcon={<Badge badgeContent={800} color="error"><MarkUnreadChatAltIcon /></Badge>}>Messages</StyledButton>
                <StyledButton variant="outlined"  startIcon={<Avatar sx={{width:20,height:20}} alt={student.name} src={student.picture} />}>Profile</StyledButton>
                <StyledButton variant="outlined"  startIcon={<LogoutIcon />} onClick={onLogout}>Logout</StyledButton>   
            </Icons>
        </StyledToolbar>
        
    </AppBar>
  )
}

export default Navbar