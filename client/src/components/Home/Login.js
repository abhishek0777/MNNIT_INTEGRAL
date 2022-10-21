import React, { useEffect } from 'react'
import {Container,Box,Button} from '@mui/material'
import {useDispatch,useSelector} from 'react-redux'
import {GoogleLogin} from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

// import components
import Student from '../Student'
// import actions
import { getAccount,createAccount } from "../../actions/student";
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const student=useSelector((state)=>state.student)
  
    useEffect(()=>{
      const loggedInStudent=localStorage.getItem('student')
      if(loggedInStudent)
      dispatch(getAccount(loggedInStudent))
    },[])

    
  
    function onLogout(){
      localStorage.removeItem('student')
      dispatch({type:'GET_ACCOUNT',payload:{}})
    }
  
    function onSuccessLogin(response){
      const decoded=jwt_decode(response.credential)
      const {name,picture,email}=decoded
      const newStudent={
          name:name,
          email:email,
          picture:picture
      }
      dispatch(createAccount(newStudent))
      localStorage.setItem('student',email)
    }
    
  return (
        <Container fixed>
            <Box>
                {Object.keys(student).length!==0?(
                
                <Button variant="contained" onClick={()=>navigate('/dashboard')}>Go to Dashboard</Button>
                ):(
                <GoogleLogin
                    onSuccess={(response)=>onSuccessLogin(response)}
                    onError={()=>console.log('Error')}
                    text="signin"
                    theme="filled_black"
                />
                )}
            </Box>
        </Container>
        

  )
}

export default Login