import React from 'react'
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
const Footer = () => {
  return (
    <div style={{backgroundColor:"#1976d2",textAlign:"center"}}>
        <span >Designed <BrushIcon fontSize="small"/> and <CodeIcon fontSize="small"/> by &Delta;V<br/></span> 
        <span style={{color:"#f1eaea"}}>&copy; Copyright 2020 | All rights reserved </span>
    </div>
  )
}

export default Footer