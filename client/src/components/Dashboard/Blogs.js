import { Box, Button, ButtonGroup, Card, CardContent, CardMedia, Chip, Divider, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Select, Stack, Tooltip, Typography, useTheme } from '@mui/material';
import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { getAllBlogs } from '../../actions/blogs.js';
import writeablog from '../../images/writeablog.svg'
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Blog from './Blog.js';
import textureImage from '../../images/texture.jpg'
import textureImage1 from '../../images/texture1.jpg'
// backgroundImage:`url(${textureImage})`

const Blogs = () => {
  
  const dispatch=useDispatch()
  const student=useSelector((state)=>state.student)
  const blogs=useSelector((state)=>state.blogs)
  useEffect(()=>{
    dispatch(getAllBlogs())
  },[dispatch])
  
  const [checkerString,setCheckerString]=useState("allBlogs")
  function handleBlogCategory(){
    if(checkerString.localeCompare("yourBlogs")===0){
      setCheckerString("allBlogs")
    }else{
      setCheckerString("yourBlogs")
    }
  }

  const [showBlog,setShowBlog]=useState(false)
  const [blogDetails,setBlogDetails]=useState("")
  function handleShowBlog(blog){
    console.log(blog)
    setBlogDetails(blog)
    setShowBlog(true)
  }

  function handleBack(){
    setShowBlog(false)
    setBlogDetails("")
  }

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
  const [blogCategories, setBlogCategories] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setBlogCategories(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  
  const filteredBlogs=blogCategories.length!==0?blogs.filter(filterFunction):blogs
  function filterFunction(item){
    return blogCategories.indexOf(item.categories[0])!==-1
  }
  
  return (
    <>
    {(showBlog)&&(<>
      
    <Card sx={{m:2}}>
      <Stack 
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Tooltip title="Back">
          <IconButton size="large" onClick={handleBack} color="primary">
            <ArrowBackIcon fontSize="inherit"/>
          </IconButton>
        </Tooltip>
        <h4>Lorem ipsum dolosr sit amet, consectetur adipiscing elit.</h4>
      </Stack>
      
    </Card>
    </>)}
    {(!showBlog)&&(<><Card sx={{m:2,display: 'flex',backgroundImage:`url(${textureImage})`}}>
      <CardContent sx={{m:0}}>
          <Typography gutterBottom variant="h4" component="div">
            Blogs
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The blogs section of a college website provides a platform for students, faculty, and alumni to share their thoughts, experiences, and expertise on a variety of topics.
          <br></br>
          
          <ButtonGroup sx={{mt:4}}>
            
            {(checkerString==="yourBlogs")&&(<Button variant="contained" onClick={handleBlogCategory}>Your blogs</Button>)}
            {(checkerString==="allBlogs")&&(<Button variant="outlined" onClick={handleBlogCategory}>Your blogs</Button>)}
            {(checkerString==="allBlogs")&&(<Button variant="contained" onClick={handleBlogCategory}>All blogs</Button>)}
            {(checkerString==="yourBlogs")&&(<Button variant="outlined" onClick={handleBlogCategory}>All blogs</Button>)}
            
          </ButtonGroup>
          </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 300, mr:0,ml:"auto"}}
        image={writeablog}
        alt="Live from space album cover"
      />
    </Card>
    <Card sx={{display:'block',m:2}}>
      {(checkerString==="yourBlogs")&&(<h3>Saved blogs</h3>)}
      {(checkerString==="yourBlogs")&&(blogs.map(blog=>{
        if((student._id.toString()===blog.author)&&(blog.published===false)){
          return <>
          <ButtonGroup sx={{width:'99%',m:1}} fullWidth={true}>
            <Button size="large" style={{justifyContent: "flex-start"}} variant="outlined" startIcon={<VisibilityIcon/>} onClick={()=>handleShowBlog(blog)}>{blog.title}</Button>
            <Button component={Link} to='/dashboard/write-a-blog' state={{blogProp:blog}}><EditIcon/></Button>
          </ButtonGroup>
          <br></br>
          </>
        }
      }))}
      {(checkerString==="yourBlogs")&&(<h3>Published blogs</h3>)}
      {(checkerString==="yourBlogs")&&(blogs.map(blog=>{
        if((student._id.toString()===blog.author)&&(blog.published===true)){
          return <>
          <ButtonGroup sx={{width:'99%',m:1}} fullWidth={true}>
            <Button size="large" style={{justifyContent: "flex-start"}} variant="outlined" startIcon={<VisibilityIcon/>} onClick={()=>handleShowBlog(blog)}>{blog.title}</Button>
            <Button component={Link} to='/dashboard/write-a-blog' state={{blogProp:blog}}><EditIcon/></Button>
          </ButtonGroup>
          <br></br>
          </>
        }
      }))}

      {(checkerString==="allBlogs")&&(
        // <Card sx={{m:2}}>
        //   <CardContent>
            <FormControl sx={{width:'99%',m:1}}>
              <InputLabel id="demo-multiple-chip-label">Filter Blogs</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
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
                {categories.map((tag) => (
                  <MenuItem
                    key={tag}
                    value={tag}
                    style={getStyles(tag, blogCategories, theme)}
                  >
                    {tag}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
        //   </CardContent>
        // </Card>
      )}
      {(checkerString==="allBlogs")&&
        (filteredBlogs.map(blog=>{
          if(blog.published){
            return <Tooltip placement="left" title={blog.categories[0]} arrow>
              <Button size="large" style={{justifyContent: "flex-start"}} variant="outlined" startIcon={<VisibilityIcon/>} sx={{width:'99%',m:1}} onClick={()=>handleShowBlog(blog)}>{blog.title}</Button>
            </Tooltip>
          }
        }
      ))}
      
    </Card></>)}

    {(showBlog)&&<Blog key={blogDetails._id} blog={blogDetails}/>}

  
    </>
  )
}

        

export default Blogs