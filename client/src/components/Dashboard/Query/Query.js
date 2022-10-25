import { Avatar, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, Modal, Paper, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { postComment, upvoteComment } from '../../../actions/queries';
import { red } from '@mui/material/colors';
import moment from 'moment'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#ffffff',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const Query = ({queryData}) => {
  const [openModal,setOpenModal]=useState(false)
  const handleModalOpen = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };

  const [openDialog,setOpenDialog]=useState(false)
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const student=useSelector((state)=>state.student)
  const [commentData,setCommentData]=useState({
    comment:""
  })

  const dispatch=useDispatch()
  function onSubmit(){
    const newComment={author:student.name,...commentData}
    dispatch(postComment(queryData._id,newComment))
    setCommentData({comment:""})
  }

  function onUpVote(a,b){
    const upvoteData={queryID:a,commentID:b}
    dispatch(upvoteComment(upvoteData))
  }
  return (
    <Card sx={{m:1}}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                A
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title={queryData.author}
            subheader={moment(queryData.createdAt).fromNow()}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {queryData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {queryData.details}
          </Typography>
        </CardContent>

        <CardActions>
        <Button onClick={handleModalOpen}>Reference image</Button>
        <Button onClick={handleDialogOpen}>Comments</Button>
        </CardActions>
        
        {/* image box */}
        <Modal
            hideBackdrop
            open={openModal}
            onClose={handleModalClose}
        >
            <Box sx={{ ...style, width: 500 }}>
            <h2 id="child-modal-title">Reference image</h2>
            <p id="child-modal-description">
                {queryData.picture===""?"Oops No image provided by author":"Use this given image to understand the query better"}
            </p>
            <img src={queryData.picture} alt="" width="100%"/>
            <Button onClick={handleModalClose}>Close</Button>
            </Box>
        </Modal>

        {/* comment box */}
        <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        scroll='paper'
        >
        <DialogTitle id="scroll-dialog-title">Comments section</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            {[...new Array(1)]
              .map(
                () => `Help your batchmates,juniors or may be senior by writing answers to their queries and your answer will help everyone to resolve their query.`,
              )
              .join('\n\n\n')}
              
            {/* add comment */}
            <div>
                <TextField 
                id="Outlined" 
                label="Write an answer" 
                sx={{width:'100%',mt:2}} 
                focused 
                multiline 
                maxRows={4}
                value={commentData.comment}
                onChange={(e)=>setCommentData({...commentData,comment:e.target.value})}
                />
                <Button sx={{mt:2}} variant="contained" onClick={onSubmit}>Add answer</Button>
            </div>

            {/* comments */}
            <div>
                {queryData.comments.map(c=>
                <Card sx={{m:1}}>
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title={c.author}
                        subheader={moment(c.createdAt).fromNow()}
                    />

                    <CardContent>
                      <Stack direction="row" spacing={2}>
                        <ButtonGroup orientation="vertical">
                          <Tooltip title="Upvote" placement="left-start">
                          <IconButton onClick={()=>onUpVote(queryData._id,c._id)} size="large"><ArrowDropUpIcon color="primary" fontSize="inherit"/></IconButton>
                          </Tooltip>
                        
                        <Button disable>{c.upvote}</Button>
                        </ButtonGroup>
                        <Typography variant="body1" gutterBottom>
                          {c.comment}
                        </Typography>
                      </Stack>
                    </CardContent>
                    
                    
                </Card>
                )}
            </div>
               
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Card>

  )
}

export default Query