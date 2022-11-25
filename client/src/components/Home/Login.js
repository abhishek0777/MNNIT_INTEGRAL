import React, { useEffect } from 'react'
import {Container,Box,Button, Grid} from '@mui/material'
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
        <>
        <div>
          <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          >
            <Grid item sm={5} sx={{p:5}}>
              <h3 className='login-heading'>MNNIT Integral</h3>
              <p className='login-text'>
              MNNIT Integral provides registered students of MNNIT to form a
              social networking platform among themselves, enabling them to connect with their seniors,
              batchmates and juniors for sharing information, putting queries, answering someone’s
              doubt and to communicate with anyone.
              </p>
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
            </Grid>
            <Grid item sm={7} className='login-background-image'>
                 
            </Grid>
          </Grid>
        </div>
        </>
        
        

  )
}

export default Login