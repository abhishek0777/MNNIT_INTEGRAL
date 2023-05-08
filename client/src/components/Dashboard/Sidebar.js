import { Avatar, Box, Chip, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, styled, Switch, Typography } from '@mui/material'
import React from 'react'

// import icons
import PushPinTwoToneIcon from '@mui/icons-material/PushPinTwoTone';
import HelpCenterTwoToneIcon from '@mui/icons-material/HelpCenterTwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
import DynamicFeedTwoToneIcon from '@mui/icons-material/DynamicFeedTwoTone';
import NoteAltTwoToneIcon from '@mui/icons-material/NoteAltTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import PagesTwoToneIcon from '@mui/icons-material/PagesTwoTone';
import ArchiveIcon from '@mui/icons-material/Archive';

import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




const StyledLink=styled(Link)({
  textDecoration:"none",
  display:"flex",
  color:"#000000"
})
const Sidebar = () => {

  const student=useSelector((state)=>state.student)
  return (
    <Box 
    flex={1} 
    p={2} 
    sx={{display:{xs:"none",md:"block"}}}
    >
        <Box position="fixed"
        >
        <Divider variant="middle">
          <Chip color="primary" label="Actions"/>
        </Divider>
        <List
        >
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/notices'>
                <ListItemIcon>
                  <PushPinTwoToneIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Notices"/>
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/queries'>
                <ListItemIcon>
                  <HelpCenterTwoToneIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Queries"/>
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/buy-and-sell'>
                <ListItemIcon>
                  <StoreTwoToneIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Buy & Sell" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/feed'>
                <ListItemIcon>
                  <DynamicFeedTwoToneIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Feed" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/write-a-blog'>
                <ListItemIcon>
                  <NoteAltTwoToneIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Write a blog" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              <StyledLink to='/dashboard/blogs'>
                <ListItemIcon>
                  <ArticleTwoToneIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Blogs" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/search-students'>
                <ListItemIcon>
                  <PersonSearchTwoToneIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Search Students" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          {(student.isAdmin)&&(<ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/pageRequests'>
                <ListItemIcon>
                  <ArchiveIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Page requests" />
              </StyledLink>
            </ListItemButton>
          </ListItem>)}
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/pages'>
                <ListItemIcon>
                  <PagesTwoToneIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
        </List>

        <Divider variant="middle">
          <Chip color="primary" label="Profile"/>
        </Divider>

        

        <List
        >
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/profile'>
                <ListItemIcon>
                  <PersonTwoToneIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/update-profile'>
                <ListItemIcon>
                  <ManageAccountsTwoToneIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Manage profile" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/notices'>
                <ListItemIcon>
                  <LogoutTwoToneIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
        </List>

        </Box>

    
    </Box>
  )
}

export default Sidebar