import React from 'react'
import {AppBar,Toolbar,styled,Box,Button} from '@mui/material'
// import icons
import HomeIcon from '@mui/icons-material/Home';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FeaturedPlayListSharpIcon from '@mui/icons-material/FeaturedPlayListSharp';

import MNNITIntegralLogo from '../MNNITIntegralLogo'

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
  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <MNNITIntegralLogo/>
            <Icons>
                <StyledButton variant="outlined"  startIcon={<HomeIcon/>}>Home</StyledButton>
                <StyledButton variant="outlined"  startIcon={<EmojiObjectsIcon/>}>About us</StyledButton>
                <StyledButton variant="outlined"  startIcon={<FeaturedPlayListSharpIcon/>}>Features</StyledButton>
                <StyledButton variant="outlined"  startIcon={<ContactMailIcon/>}>Contact us</StyledButton>
            </Icons>
        </StyledToolbar>
        
    </AppBar>
  )
}

export default Navbar