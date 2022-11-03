import { Avatar, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { TypeAnimation } from 'react-type-animation';
// styling css
// import '../../../../assets/css/profile.css'


// icons
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';

const SectionOne = ({student}) => {

  return (
    <div>
      <Grid 
        className="profile-1" 
        container 
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
        <Avatar
          alt={student.name}
          src={student.picture}
          sx={{ width: 150, height: 150 }}
        />
        </Grid>
        <Grid item>
        
        <h1 className="student-name">{student.name}</h1>
        </Grid>
        <Grid item>
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
            student.branch,
            1000,
            student.course,
            1000,
            ]}
            speed={150} // Custom Speed from 1-99 - Default Speed: 40
            wrapper="h3" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
            className="student-branch"
          />
        </Grid>
        <Grid item>
          <Grid className="icons-bar" container direction="row" >
            <Grid className="button-container" item sx={{m:1}}>
              <IconButton size="large" href={`mailto:${student.email}`} target="_blank">
                <EmailIcon className="social-icon" fontSize="inherit"/>
              </IconButton>
            </Grid>
            <Grid className="button-container" item sx={{m:1}}>
              <IconButton size="large" href={student.linkedIn} target="_blank">
                <LinkedInIcon className="social-icon" fontSize="inherit"/>
              </IconButton>
            </Grid>
            <Grid className="button-container" item sx={{m:1}}>
              <IconButton size="large" href={student.github} target="_blank">
                <GitHubIcon className="social-icon" fontSize="inherit"/>
              </IconButton>
            </Grid>
            <Grid className="button-container" item sx={{m:1}}>
              <IconButton size="large" href={student.website} target="_blank">
                <LinkIcon className="social-icon" fontSize="inherit"/>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default SectionOne