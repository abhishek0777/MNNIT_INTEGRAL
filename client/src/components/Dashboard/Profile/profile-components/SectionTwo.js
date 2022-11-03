import { Avatar, Card, CardContent, CardHeader, Divider, Grid } from '@mui/material'
import moment from 'moment'
import React from 'react'

const SectionTwo = ({student}) => {
  return (
    <div>
        <div className='profile-2-header-container'>
            <h1 className="profile-2-header">ABOUT ME</h1>
        </div>
        <Grid 
            className="profile-2"
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <Grid item md={5}>
                <Card raised={true} sx={{maxWidth:350}}>
                    <CardHeader
                        avatar={
                            <Avatar
                                alt={student.name}
                                src={student.picture}
                            />
                        }
                        title="MNNIT ID CARD"
                        subheader={moment(student.createdAt).format('LL')}
                        sx={{bgcolor:"#EBEBEB"}}
                    />
                    <Divider/>
                    <CardContent>
                        <p>{student.name}</p>
                        <p>{student.email}</p>
                        <p>{student.gsuite}</p>
                        <p>{student.registration_number}</p>
                        <p>{student.branch}</p>
                        <p>{student.course}</p>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={7} mt={1}>
                <Card raised={true} sx={{maxWidth:600}}>
                    <CardHeader
                        avatar={
                            <>
                            <Avatar
                                sx={{bgcolor:"#dc3545",width:13,height:13,color:"#dc3545",mr:1}}
                            >
                            .
                            </Avatar>
                            <Avatar
                                sx={{bgcolor:"#ffc107",width:13,height:13,color:"#ffc107",mr:1}}
                            >
                            .
                            </Avatar>
                            <Avatar
                                sx={{bgcolor:"#28a745",width:13,height:13,color:"#28a745",mr:1}}
                            >
                            .
                            </Avatar>
                            </>
                        }
                        sx={{bgcolor:"#EBEBEB"}}
                    />
                    <Divider/>
                    <CardContent>
                        <h4>Hi :)</h4>
                        <p>{student.about}</p>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
  )
}

export default SectionTwo