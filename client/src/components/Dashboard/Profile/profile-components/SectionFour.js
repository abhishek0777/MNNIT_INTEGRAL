import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'

const SectionFour = ({student}) => {
  return (
    <div className='profile-4-container'>
        <h1 className='profile-4-header'>SKILLS</h1>
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
            {student.skills.map((skill)=>
            <Grid item sm={6} md={4} lg={3}>
                <div className='skill-card'>
                    <h6 className="skill-name">{skill}</h6>
                </div>
            </Grid>
            )}
            

        </Grid>
    </div>
  )
}

export default SectionFour