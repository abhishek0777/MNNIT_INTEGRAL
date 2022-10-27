import { Avatar, Box, Chip, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Switch } from '@mui/material'
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

import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Link } from 'react-router-dom';


const StyledLink=styled(Link)({
  textDecoration:"none",
  display:"flex",
  color:"#000000"
})
const Sidebar = () => {
  return (
    <Box 
    flex={1} 
    p={2} 
    sx={{display:{xs:"none",md:"block"}}}
    >
        <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/notices'>
                <ListItemIcon>
                  <PushPinTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Notices" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/queries'>
                <ListItemIcon>
                  <HelpCenterTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Queries" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/buy-and-sell'>
                <ListItemIcon>
                  <StoreTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Buy & Sell" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/feed'>
                <ListItemIcon>
                  <DynamicFeedTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Feed" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/write-a-blog'>
                <ListItemIcon>
                  <NoteAltTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Write a blog" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
              <StyledLink to='/dashboard/blogs'>
                <ListItemIcon>
                  <ArticleTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Blogs" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/search-students'>
                <ListItemIcon>
                  <PersonSearchTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Search Students" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/pages'>
                <ListItemIcon>
                  <PagesTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
        </List>

        <Divider variant="middle">
          <Chip label="Profile"/>
        </Divider>

        

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/profile'>
                <ListItemIcon>
                  <PersonTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/update-profile'>
                <ListItemIcon>
                  <ManageAccountsTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Manage profile" />
              </StyledLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledLink to='/dashboard/notices'>
                <ListItemIcon>
                  <LogoutTwoToneIcon />
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