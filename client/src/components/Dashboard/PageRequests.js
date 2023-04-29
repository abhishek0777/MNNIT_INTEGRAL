import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPage, deletePageRequest, getPageRequests, updateStatusOfPageRequest } from '../../actions/pages'
import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, TextField, Typography } from '@mui/material'
import pageRequestSVG from '../../images/pageRequest1.svg'
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

const PageRequests = () => {

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getPageRequests())
    },[dispatch])

    const requests=useSelector((state)=>state.pageRequests)

    const [openDialog,setOpenDialog]=useState(false)
    const [whyText,setWhyText]=useState("")
    const handleDialogOpen = (text) => {
        setWhyText(text)
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
        setWhyText("")
    };

    const [openRejectDialog,setOpenRejectDialog]=useState(false)
    const [reasonToReject,setReasonToReject]=useState({})
    const handleRejectDialogOpen=(id)=>{
        setReasonToReject({id:id,reason:""})
        setOpenRejectDialog(true)
    }
    const handleRejectDialogClose=()=>{
        setOpenRejectDialog(false)
        rejectRequest(reasonToReject)
    }

    // rejecting a page request
    function rejectRequest(obj){
        dispatch(deletePageRequest(obj))
    }

    // accept a page requeset
    function acceptRequest(item){
        dispatch(createPage(item))
        dispatch(updateStatusOfPageRequest(item._id.toString()))
    }
    return (
        <>
        <Card sx={{m:2,display: 'flex'}}>
            <CardContent sx={{m:0}}>
                <Typography gutterBottom variant="h5" component="div">
                    Send a request for new page
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum sapien sapien, non eleifend orci interdum non. Donec molestie ligula lorem, ut vehicula dui hendrerit ut. Nulla dignissim hendrerit metus, id mollis justo elementum in. Vivamus euismod varius turpis vel porta. Integer ultrices a velit non ultricies.
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                sx={{ width: 200, mr:0,ml:"auto"}}
                image={pageRequestSVG}
                alt="Live from space album cover"
            />
        </Card>

        <Paper sx={{m:2,p:1}}>
        <Grid
            container 
            spacing={2} 
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            {requests.map(item=>
            (item.pending===true)&&<Grid key={item._id.toString()} item xs={12} sm={6} md={4}>
                {/*  */}
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="card image"
                        height="140"
                        image={item.image}
                    />
                    
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.pageName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {item.description}
                        </Typography>
                        
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" sx={{mr:4}} onClick={()=>handleDialogOpen(item.why)}>Why?</Button>
                        <ButtonGroup variant="contained">
                            <Button color="success" startIcon={<DoneIcon/>} onClick={()=>acceptRequest(item)}>Accept</Button>
                            <Button color="error" startIcon={<ClearIcon/>} onClick={()=>handleRejectDialogOpen(item._id.toString())}>Reject</Button>
                        </ButtonGroup>
                    </CardActions>
                    </Card>
                {/*  */}
            </Grid>
            )}
        </Grid>
        </Paper>



        <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        scroll='paper'
        >
        <DialogTitle id="scroll-dialog-title"> Why requestor want to create this page?</DialogTitle>
        <DialogContent dividers={true}>
        <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
        >
            <p>{whyText}</p>
        </DialogContentText>
        
        </DialogContent>
        <DialogActions>
        <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
        </Dialog>


        <Dialog
        open={openRejectDialog}
        onClose={handleRejectDialogClose}
        scroll='paper'
        >
        <DialogTitle id="scroll-dialog-title"> Please add the reason why you're rejecting a request.</DialogTitle>
        <DialogContent dividers={true}>
        <TextField 
            id="outlined1" 
            label="Reason for rejection" 
            sx={{width:'100%',mt:2}} 
            multiline 
            maxRows={4}
            value={reasonToReject.reason}
            onChange={(e)=>setReasonToReject({...reasonToReject,reason:e.target.value})}
        />
        
        </DialogContent>
        <DialogActions>
        <Button onClick={handleRejectDialogClose}>Close</Button>
        </DialogActions>
        </Dialog>
        </>
    )
}

export default PageRequests