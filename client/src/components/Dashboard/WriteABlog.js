import React,{ useState, useRef, useMemo } from 'react'
import {Button, Card, CardContent, CardMedia, Typography,TextField, useTheme, FormControl, InputLabel, Select, OutlinedInput, Box, Chip, MenuItem, ButtonGroup } from '@mui/material'
import writeablog from '../../images/writeablog.svg'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { saveNewBlog, saveBlog, publishBlog } from '../../actions/blog';

// jodit text editor
import JoditEditor from 'jodit-react';
import parse from 'html-react-parser';
const WriteABlog = () => {
  const location=useLocation()
  let blogProp=null
  if(location.state){
    blogProp=location.state.blogProp
  }
  console.log("Blogprop",blogProp)
  const navigate=useNavigate()
  const student=useSelector((state)=>state.student)
  const dispatch=useDispatch()

  const [blogTitle, setBlogTitle]=useState(blogProp?blogProp.title:'')
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const categories=[
    "Academic resources",
    "College culture",
    "Sports",
    "Roadmaps",
    "Technology",
    "Finance",
    "Success story",
    "Motivational story",
    "Entrepreneurship",
    "Student hacks",
    "Interview experience",
    "Scholarships"
  ]
  categories.sort()

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [blogCategories, setBlogCategories] = useState(blogProp?blogProp.categories:[]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setBlogCategories(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const editor = useRef(null);
	const [content, setContent] = useState(blogProp?blogProp.content:'');

  function handleSaveNewBlog(){

    const blogData={
      author:student._id,
      title:blogTitle,
      categories:blogCategories,
      content:content
    }
    dispatch(saveNewBlog(blogData))
    navigate('/dashboard/blogs')
  }

  function handleSaveBlog(){
    const blogData={
      author:student._id,
      title:blogTitle,
      categories:blogCategories,
      content:content
    }
    dispatch(saveBlog(blogProp._id.toString(),blogData))
    navigate('/dashboard/blogs')
  }
  function handlePublishNewBlog(){

    const blogData={
      author:student._id,
      title:blogTitle,
      categories:blogCategories,
      content:content,
      published:true
    }
    dispatch(publishBlog(blogProp._id.toString(),blogData))
    navigate('/dashboard/blogs')
  }
  return (
    <>
    <Card sx={{m:2,display: 'flex'}}>
      <CardContent sx={{m:0}}>
          <Typography gutterBottom variant="h4" component="div">
            Write a blog for community
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit in velit interdum ornare. Proin malesuada, nisi vel fringilla euismod, magna massa congue lacus, eget commodo magna elit at dui. Curabitur accumsan vel velit vel accumsan. Sed congue ipsum et eleifend mollis. Sed dapibus velit vel lacinia malesuada. Integer vitae vestibulum ante. In hac habitasse platea dictumst. Sed tincidunt, metus id egestas fringilla, quam leo rutrum ipsum, eu aliquet nisi nisi et nulla.
          </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 300, mr:0,ml:"auto"}}
        image={writeablog}
        alt="Live from space album cover"
      />
    </Card>
    <Card sx={{mr:2,ml:2,display:'block',p:2}}>
      <TextField 
        id="Outlined" 
        label="Blog title" 
        sx={{width:'80%',mt:2}} 
        focused 
        multiline 
        maxRows={4}
        placeholder="Write a blog title here...."
        value={blogTitle}
        onChange={e=>setBlogTitle(e.target.value)}
      />
      <br></br>
      <FormControl sx={{width:'80%',mt:2}}>
        <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          focused
          value={blogCategories}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Filter items" />}
          sx={{width:'100%'}}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {categories.map((category) => (
            <MenuItem
              key={category}
              value={category}
              style={getStyles(category, blogCategories, theme)}
            >
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Card sx={{width:'80%',mt:2}}>
        <JoditEditor
        sx={{width:'80%'}}
        ref={editor}
        value={content}
        onChange={newContent =>setContent(newContent)}
        />
      </Card>
      <ButtonGroup sx={{mt:4}} variant="contained" size="large">
        {(blogProp?false:true)&&<Button onClick={handleSaveNewBlog}>Save</Button>}
        {(blogProp?blogProp.published?false:true:false)&&<Button onClick={handleSaveBlog}>Save</Button>}
        {(blogProp?true:false)&&<Button onClick={handlePublishNewBlog}>Publish</Button>}
      </ButtonGroup>
      
    </Card>
    <Card sx={{m:2}}>
      <Card sx={{p:2}}>
        <h2>Preview</h2> 
        #{blogCategories}
        <h3>{blogTitle}</h3>
        {parse(content)}
      </Card>
    </Card>
    </>
  )
}

export default WriteABlog