import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
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

const Sidebar = () => {
  return (
    <Box 
    flex={1} 
    p={2} 
    sx={{display:{xs:"none",sm:"block"}}}
    >
        <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton components="a" href="/">
              <ListItemIcon>
                <PushPinTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Notice" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HelpCenterTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary="Queries" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StoreTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary="Buy & Sell" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DynamicFeedTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary="Feed" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NoteAltTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary="Write a blog" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArticleTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary="Find blogs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonSearchTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary="Search Students" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PagesTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
    
    </Box>
  )
}

export default Sidebar