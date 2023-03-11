import { Box, Button, ButtonGroup, Card, CardContent, Typography } from '@mui/material'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import { getAccountById } from '../../actions/student';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { likeDislike } from '../../actions/blog.js';


const Blog = ({blog}) => {

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAccountById(blog.author))
    },[])
    const blogAuthor=useSelector((state)=>state.studentProfile)
    const student=useSelector((state)=>state.student)


    function handleLikeDislike(blogProp){
        const studentID=student._id.toString()
        dispatch(likeDislike(studentID,blogProp))
        const id=student._id.toString()
        let bloglikes=blog.likes
        if(bloglikes.includes(id)){
            let arr=blog.likes
            let newArr=arr.filter(function(userID){
                return userID!==id
            })
            blog.likes=newArr
        }else{
            blog.likes.push(id)
        }
    }

    return (
        <Card sx={{m:2,bgcolor:'#111111'}}>
            <CardContent sx={{m:4}}>
            <Typography variant="h3" color="white">{blog.title}</Typography>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                <Typography variant='body2' color="grey">{moment(blog.updatedAt).format('MMMM Do YYYY, h:mm a')}</Typography>
            </Box>
            <Typography color="white">{parse(blog.content)}</Typography>
            <ButtonGroup size="large">
                <Button startIcon={blog.likes.includes(blogAuthor._id.toString())?<FavoriteIcon/>:<FavoriteBorderIcon/>} onClick={()=>handleLikeDislike(blog)}>{blog.likes.length}</Button>
                <Button startIcon={<CommentIcon/>}>2</Button>
            </ButtonGroup>
            </CardContent>
        </Card>
        
    )
}

export default Blog