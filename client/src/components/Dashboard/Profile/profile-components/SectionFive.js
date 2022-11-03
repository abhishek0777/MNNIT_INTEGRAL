import { Card } from '@mui/material'
import { CardMedia } from '@mui/material'
import { Typography } from '@mui/material'
import { CardContent } from '@mui/material'
import { Grid } from '@mui/material'

import React from 'react'
import clubsImage from '../../../../images/clubs.svg'
import companyImage from '../../../../images/company.svg'
const SectionFive = ({student}) => {
  return (
    <div className="profile-5-container">
        <h1 className="profile-5-header">CLUBS, INTERNSHIP AND PLACEMENT</h1>
        <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        >
            <Grid item sx={{mt:3}}>
                <Card sx={{maxWidth:345}}>
                    <CardMedia
                    component="img"
                    alt="card image"
                    height="190"
                    image={clubsImage}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Member of following Clubs:
                    </Typography>
                    {student.clubs.map((club)=>
                        <Typography variant="body2" color="text.secondary">
                        {club}
                        </Typography>
                    )}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sx={{mt:3}}>
                <Card sx={{maxWidth:345}}>
                    <CardMedia
                    component="img"
                    alt="card image"
                    height="150"
                    image={companyImage}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    INTERNSHIP
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                            {student.internship===""?"Do not have internship":`@ ${student.internship}`}
                    </Typography>

                    <Typography gutterBottom variant="h6" component="div">
                        PLACEMENT
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                            {student.placement===""?"Do not have placement":`@ ${student.placement}`}
                    </Typography>
                    </CardContent>
                </Card>
                
            </Grid>
        </Grid>
    </div>
  )
}

export default SectionFive