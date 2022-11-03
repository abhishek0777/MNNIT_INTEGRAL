import { Avatar, Box, Button, Card, CardContent, CardMedia, Chip, FormControl, Grid, InputAdornment, InputLabel, ListSubheader, MenuItem, OutlinedInput, Paper, Select, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import profileupdate from '../../images/profileupdate.svg'
import { updateProfile } from '../../actions/student';
const UpdateProfile = () => {

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

  const theme = useTheme();
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  


  const courses=[
    "Bachelor Of Technology (B.Tech.)",
    "Master Of Technology (M.Tech.)",
    "Masters in Computer Application (MCA)",
    "Master Of Science (M.Sc.)"
  ]

  const btechBranches=[
    "Biotechnology",
    "Chemical Engineering",
    "Civil Engineering",
    "Computer Science and Engineering",
    "Electrical Engineering",
    "Electronics and Communication Engineering",
    "Information Technology",
    "Mechanical Engineering",
    "Production and Industrial Engineering"
  ]

  const mtechBranches=[
    "Biomedical Engineering",
    "Biotechnology",
    "Chemical Engineering",
    "Civil Engineering(Environmental Engineering)",
    "Civil Engineering(Geotechnical Engineering)",
    "Communication Systems",
    "Computer Aided Design and Manufacturing",
    "Computer Science and Engineering",
    "Control & Instrumentation",
    "Design Engineering",
    "Engineering Mechanics and Design",
    "Fluids Engineering",
    "Geoinformatics",
    "Information Security",
    "Material Science and Engineering",
    "Microelectronics and VLSI Design",
    "Power Electronics and Drives",
    "Power System",
    "Product Design and Development",
    "Production Engineering",
    "Signal Processing",
    "Software Engineering",
    "Structural Engineering",
    "Thermal Engineering",
    "Transportation Engineering"
  ]

//   incomplete set
  const skillset=[
    "HTML",
    "CSS",
    "JavaScript",
    "Node JS",
    "Android",
    "Flutter",
    "Google Cloud",
    "Python",
    "C",
    "C++",
    "Go",
    "Solidity",
    "Bash",
    "Linux",
    "Machine Learning",
    "Tensorflow",
    "Open CV",
    "Dart",
    "Django",
    "Flask",
    "FastAPI",
    "Bootstrap",
    "Firebase",
    "MySQL",
    "Web3",
    "Cloud Computing",
    "Deep Learning",
    "Electron",
    "GraphQL",
    "JQuery",
    "Julia",
    "Kotlin",
    "Kubernetes",
    "Laravel",
    "MATLAB",
    "NPL",
    "Perl",
    "Qt",
    "Redux",
    "Rust",
    "Ruby",
    "Aurduino",
    "Scala",
    "Unreal Engine",
    "Wordpress",
    "Xamarin",
    "Sketch",
    "Jenkins",
    "Raspberry Pi",
    "gRPC",
    "Hardhat",
    "Truffle",
    "Brownie",
    "Mocha",
    "Chai",
    "Ethersjs",
    "Web3js",
    "React",
    "Next",
    "MongoDB",
    "PostgreSQL",
    "Cassandra",
    "Redis",
    "TailwindCSS",
    "TypeScript",
    "PyTorch",
    "Nest.js",
    "Deno",
    "Gin",
    "React Native",
    "Jest",
    "Selenium",
    "Spring Boot",
    "Cairo",
    "Fiber",
    "PHP",
    "ASP.NET",
    "Goji",
    "Gorilla",
    "Gocraft",
    "DynamoDB",
    "CosmosDB",
    "Unity",
    "Elixir",
    "Express",
    "Vue js",
    "Electron js",
    "Golang",
    "Phtml",
    "Ruby on rails",
    "Unity",
    "Unreal Engine",
    "C#",
    "SCSS",
    "Tailwind",
    "Bootstrap",
    "Material UI"
]
skillset.sort()

// incomplete club list
  const clubset=[
    "Student Mentorship Program",
    "Robotics Club",
    "Astrowing",
    "Computer Club",
    "Electronics Society",
    "Avishkar - Tech fest",
    "Culrav - Cultural fest",
    "Entrepreneurship Cell",
    "AeroClub",
    "Rotaract Club",
    "Gnotalks",
    "Perspective ",
    "SAE Club",
    "Nishaad - Music Club of MNNIT",
    "Energy Club",
    "Literary Club",
    "Chess Club",
    "Codesses MNNIT",
    "Media House of MNNIT",
    "Enactus MNNIT",
    "Dance Club of MNNIT",
    "Cisco ThingQbator MNNIT",
    "Institute Innovation Council MNNIT",
    "MNNIT Kabaddi",
    "Spandan MNNIT",
    "Athletics Club MNNIT",
    "Alchemy MNNIT",
    "Green Club MNNIT",
    "MNNIT Football Club",
    "Anokhi Pehel MNNIT",
    "Prosang MNNIT",
    "Gnosis Quizzing Club",
    "Cricket Club of MNNIT",
    "Google Developer Students Club",
    "Hack36"
]
clubset.sort()

  const student=useSelector((state)=>state.student)
  const [profilePicture,setProfilePicture]=React.useState(student.picture)
  const [updatedGsuiteID,setUpdatedGsuiteID]=React.useState(student.gsuite)
  const [updatedRegistrationNumber,setUpdatedRegistrationNumber]=React.useState(student.registration_number)
  const [updatedAbout,setUpdatedAbout]=React.useState(student.about)
  const [updatedCourse,setUpdatedCourse]=React.useState(student.course)
  const [updatedBranch,setUpdatedBranch]=React.useState(student.branch)
  const [updatedSkills,setUpdatedSkills]=React.useState(student.skills)
  const [updatedClubs,setUpdatedClubs]=React.useState(student.clubs)
  const [updatedAchievements,setUpdatedAchievements]=React.useState(student.achievements)
  const [updatedLinkedIn,setUpdatedLinkedIn]=React.useState(student.linkedIn)
  const [updatedGithub,setUpdatedGithub]=React.useState(student.github)
  const [updatedWebsite,setUpdatedWebsite]=React.useState(student.website)
  const [updatedInternship,setUpdatedInternship]=React.useState(student.internship)
  const [updatedPlacement,setUpdatedPlacement]=React.useState(student.placement)
  const [updatedResume,setUpdatedResume]=React.useState(student.resume)

  const handleChange = (event,setFunction) => {
    const {
      target: { value },
    } = event;
    setFunction(value);
  };

  const dispatch=useDispatch()
  
  
  const newStudent={
    picture:student.picture,
    name:student.name,
    email:student.email,
    gsuite:student.gsuite,
    registration_number:student.gsuite,
    about:student.about,
    course:student.course,
    branch:student.branch,
    skills:student.skills,
    clubs:student.clubs,
    achievements:student.achievements,
    linkedIn:student.linkedIn,
    github:student.github,
    website:student.website,
    internship:student.internship,
    placement:student.placement,
    resume:student.resume
  }
  function handleSubmit(){
    console.log(updatedAbout)
    if(profilePicture!==""){
        console.log("Profile picture updated")
        newStudent.picture=profilePicture
    }
    if(updatedGsuiteID!==newStudent.gsuite){
        console.log("GsuiteID updated")
        newStudent.gsuite=updatedGsuiteID
    }
    if(updatedRegistrationNumber!==newStudent.registration_number){
        console.log("Reg. no updated")
        newStudent.registration_number=updatedRegistrationNumber
    }
    if(updatedAbout!==newStudent.about){
        console.log("About you updated")
        newStudent.about=updatedAbout
    }
    if(updatedCourse!==newStudent.course){
        console.log("Course updated")
        newStudent.course=updatedCourse
    }
    if(updatedBranch!==newStudent.branch){
        console.log("Branch updated")
        newStudent.branch=updatedBranch
    }
    if(updatedSkills!==newStudent.skills){
        console.log("Skills updated")
        newStudent.skills=updatedSkills
    }
    if(updatedClubs!==newStudent.clubs){
        console.log("Clubs updated")
        newStudent.clubs=updatedClubs
    }
    if(updatedAchievements!==newStudent.achievements){
        console.log("achievements updated")
        newStudent.achievements=updatedAchievements
    }
    if(updatedLinkedIn!==newStudent.linkedIn){
        console.log("linkedIn updated")
        newStudent.linkedIn=updatedLinkedIn
    }
    if(updatedGithub!==newStudent.github){
        console.log("Github updated")
        newStudent.github=updatedGithub
    }
    if(updatedWebsite!==newStudent.website){
        console.log("Website updated")
        newStudent.website=updatedWebsite
    }
    if(updatedInternship!==newStudent.internship){
        console.log("Internship updated")
        newStudent.internship=updatedInternship
    }
    if(updatedPlacement!==newStudent.placement){
        console.log("Placement updated")
        newStudent.placement=updatedPlacement
    }
    if(updatedResume!==newStudent.resume){
        console.log("Resume updated")
        newStudent.resume=updatedResume
    }
    console.log(newStudent)
    dispatch(updateProfile(student._id.toString(),newStudent))
  }
  return (
    <>
    <Paper sx={{p:0.5,m:1}}>
        <Card sx={{m:1,display:'flex'}}>
        <CardContent sx={{m:0}}>
          <Typography gutterBottom variant="h5" component="div">
            Update Profile
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You can update your profile anytime from this page.Updated profile will be shown to the users who search you.So keep your profile updated and be the top on someone's search.You can update your skills, clubs, achievements, resume, profile picture, internship and placement and but you can't edit your personal email and name.In order to update your name or personal email, you need to contact to website admins with proofs.
          </Typography>
        </CardContent>
        <CardMedia
        component="img"
        sx={{ width: 200, mr:0,ml:"auto"}}
        image={profileupdate}
        alt="Live from space album cover"
        />
        </Card>
    </Paper>
    
    <Paper sx={{p:1,m:1}}>
        <Grid container>
            <Grid item xs={12} md={5}>

                <Paper sx={{p:1,m:2}}>
                    <Avatar
                    src={profilePicture}
                    alt="Abhishek Vaishnav"
                    sx={{width:80,height:80,ml:"auto",mr:"auto"}}
                    variant="rounded"
                    />
                    <FileBase
                        type="file" 
                        multiple={false}
                        onDone={({base64})=>setProfilePicture(base64)}
                    />
                </Paper>
                
                <Paper sx={{p:1,m:2}}>
                    <TextField 
                        id="Outlined" 
                        label="Name" 
                        sx={{width:'100%',mb:0.5}} 
                        value={student.name}
                        disabled
                    />
                    <Typography variant="body2" color="text.secondary">
                        This name is fetched from your gmail account.This is not editable and to change it, you need to contact to website admin with proofs.
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    <TextField 
                        id="Outlined" 
                        label="Personal E-mail" 
                        sx={{width:'100%',mb:0.5}} 
                        value={student.email}
                        disabled
                    />
                    <Typography variant="body2" color="text.secondary">
                        Email ID will act as a primary key of your account and you can't change it, and if worst scenario you want to change, contact to website admin with proofs.
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    <TextField 
                        id="Outlined" 
                        label="Gsuite ID" 
                        sx={{width:'100%',mb:0.5}} 
                        focused 
                        multiline 
                        maxRows={4}
                        value={updatedGsuiteID}
                        onChange={(e)=>handleChange(e,setUpdatedGsuiteID)}
                    />
                    <Typography variant="body2" color="text.secondary">
                        Gsuite ID is the email ID provided by college.<br/>
                        Ex: abhishek.20198003@mnnit.ac.in
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    <TextField 
                        id="Outlined" 
                        label="Registration Number" 
                        sx={{width:'100%',mb:0.5}} 
                        focused 
                        multiline 
                        maxRows={4}
                        value={updatedRegistrationNumber}
                        onChange={(e)=>handleChange(e,setUpdatedRegistrationNumber)}
                    />
                    <Typography variant="body2" color="text.secondary">
                        Registration Number is the unique number provided to you at the time of registration and written on your ID card too.<br/>
                        Ex: 20198003
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    <TextField 
                        id="Outlined" 
                        label="About you" 
                        sx={{width:'100%',mb:0.5}} 
                        focused 
                        multiline 
                        rows={3}
                        value={updatedAbout}
                        onChange={(e)=>handleChange(e,setUpdatedAbout)}
                    />
                    <Typography variant="body2" color="text.secondary">
                        Write three or four lines about you which defines you overall, informs readers about your professional background, key accomplishments and personal values.
                    </Typography>
                </Paper>
                
                <Paper sx={{p:1,m:2}}>
                    <FormControl sx={{width:'100%'}}>
                        <InputLabel id="course-chip-label">Course</InputLabel>
                        <Select
                            labelId="course-chip-label"
                            id="course-chip"
                            value={updatedCourse}
                            onChange={(e)=>handleChange(e,setUpdatedCourse)}
                            input={<OutlinedInput id="select-multiple-chip" label="Course" />}
                            sx={{width:'100%'}}
                            renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                <Chip key={selected} label={selected} />
                            </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {courses.map((c) => (
                            <MenuItem
                                key={c}
                                value={c}
                                style={getStyles(c, updatedCourse, theme)}
                            >
                                {c}
                            </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Typography variant="body2" color="text.secondary">
                       Course is the program you opted in college.<br/>
                       Ex: B.Tech. / M.Tech.
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    <FormControl sx={{width:'100%'}}>
                        <InputLabel id="branch-chip-label">Branch</InputLabel>
                        <Select
                            labelId="branch-chip-label"
                            id="branch-chip"
                            value={updatedBranch}
                            onChange={(e)=>handleChange(e,setUpdatedBranch)}
                            input={<OutlinedInput id="select-multiple-chip" label="Course" />}
                            sx={{width:'100%'}}
                            renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                <Chip key={selected} label={selected} />
                            </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            <ListSubheader>B.Tech.</ListSubheader>
                            {btechBranches.map((c) => (
                            <MenuItem
                                key={c}
                                value={c}
                                style={getStyles(c, updatedBranch, theme)}
                            >
                                {c}
                            </MenuItem>
                            ))}

                            <ListSubheader>M.Tech</ListSubheader>
                            {mtechBranches.map((c) => (
                            <MenuItem
                                key={c}
                                value={c}
                                style={getStyles(c, updatedBranch, theme)}
                            >
                                {c}
                            </MenuItem>
                            ))}

                            <ListSubheader>MCA</ListSubheader>
                            <MenuItem
                            key="MCA"
                            value="MCA"
                            style={getStyles("MCA", updatedBranch, theme)}
                            >
                                MCA
                            </MenuItem>

                            <ListSubheader>M.Sc</ListSubheader>
                            <MenuItem
                            key="Master of Science"
                            value="Master of Science"
                            style={getStyles("Master of Science", updatedBranch, theme)}
                            >M.Sc</MenuItem>
    
                        </Select>
                    </FormControl>
                    <Typography variant="body2" color="text.secondary">
                        Choose branch of your course from this select menu.
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    <FormControl sx={{width:'100%'}}>
                        <InputLabel id="skills-chip-label">Skills</InputLabel>
                        <Select
                            labelId="skills-chip-label"
                            id="skills-chip"
                            value={updatedSkills}
                            multiple
                            onChange={(e)=>handleChange(e,setUpdatedSkills)}
                            input={<OutlinedInput id="select-multiple-chip" label="Skills" />}
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
                            {skillset.map((s)=>(
                                <MenuItem
                                key={s}
                                value={s}
                                style={getStyles(s,updatedSkills,theme)}
                                >
                                    {s}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Typography variant="body2" color="text.secondary">
                        Add all of your skills to showcase to your batchmates.You can select multiple skills from this select menu but be authentic.
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    <FormControl sx={{width:'100%'}}>
                        <InputLabel id="clubs-chip-label">Clubs</InputLabel>
                        <Select
                            labelId="clubs-chip-label"
                            id="clubs-chip"
                            multiple
                            value={updatedClubs}
                            onChange={(e)=>handleChange(e,setUpdatedClubs)}
                            input={<OutlinedInput id="select-multiple-chip" label="Clubs" />}
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
                            {clubset.map((s)=>(
                                <MenuItem
                                key={s}
                                value={s}
                                style={getStyles(s,updatedClubs,theme)}
                                >
                                    {s}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Typography variant="body2" color="text.secondary">
                        Are you part of any Club?If yes, then select all those to add to your profile.
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    <TextField 
                        id="Outlined" 
                        label="Achievements" 
                        sx={{width:'100%',mb:0.5}} 
                        focused 
                        multiline 
                        rows={4}
                        value={updatedAchievements}
                        onChange={(e)=>handleChange(e,setUpdatedAchievements)}
                    />
                    <Typography variant="body2" color="text.secondary">
                        Write three or four lines about you which defines you overall, informs readers about your professional background, key accomplishments and personal values.
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    
                    <TextField
                        id="outlined"
                        label="LinkedIn URL"
                        sx={{width:'100%',mb:0.5}}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <LinkedInIcon color="primary"/>
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        value={updatedLinkedIn}
                        onChange={(e)=>handleChange(e,setUpdatedLinkedIn)}
                    />
                    <Typography variant="body2" color="text.secondary">
                        Put your LinkedIn URL? If you don't have LinkedIn account, then create because ultimately you need it.
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    
                    <TextField
                        id="outlined"
                        label="Github URL"
                        sx={{width:'100%',mb:0.5}}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <GitHubIcon/>
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        value={updatedGithub}
                        onChange={(e)=>handleChange(e,setUpdatedGithub)}
                    />
                    <Typography variant="body2" color="text.secondary">
                        Put your Github URL? If you don't have Github account, then create because ultimately you need it.
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    
                    <TextField
                        id="outlined"
                        label="Personal Website URL"
                        sx={{width:'100%',mb:0.5}}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <LinkIcon/>
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        value={updatedWebsite}
                        onChange={(e)=>handleChange(e,setUpdatedWebsite)}
                    />
                    <Typography variant="body2" color="text.secondary">
                        If you have ever created your portfolio website and its hosted, then you can put the link here.
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    <TextField 
                        id="Outlined" 
                        label="Internship" 
                        sx={{width:'100%',mb:0.5}} 
                        focused 
                        multiline 
                        maxRows={4}
                        value={updatedInternship}
                        onChange={(e)=>handleChange(e,setUpdatedInternship)}
                    />
                    <Typography variant="body2" color="text.secondary">
                        Have you got the internship? Please write the name of your company here.
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    <TextField 
                        id="Outlined" 
                        label="Placement" 
                        sx={{width:'100%',mb:0.5}} 
                        focused 
                        multiline 
                        maxRows={4}
                        value={updatedPlacement}
                        onChange={(e)=>handleChange(e,setUpdatedPlacement)}
                    />
                    <Typography variant="body2" color="text.secondary">
                    Have you got the placement? Please write the name of your company here.
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    <Button variant="contained" sx={{m:2}}>Resume</Button>
                    {/* <a href={updatedResume} download>Resume download</a> */}
                    <br/>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64})=>setUpdatedResume(base64)}
                    />
                    <Typography variant="body2" color="text.secondary">
                        Do you want to update your resume? Upload new resume using button provided above.
                    </Typography>
                </Paper>

                <Paper sx={{p:1,m:2}}>
                    <Button variant="contained" sx={{width:'100%'}} onClick={handleSubmit}>Update</Button>
                </Paper>

            </Grid>
        </Grid>  
    </Paper>
    </>
  )
}

export default UpdateProfile