import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAccount } from '../actions/student'
const Student = () => {
  const student=useSelector((state)=>state.student)

  const dispatch=useDispatch()
  const navigate=useNavigate()

  function onLogout(){
    localStorage.removeItem('student')
    dispatch({type:'GET_ACCOUNT',payload:{}})
    navigate('/')
  }
  
  useEffect(()=>{
    const loggedInStudent=localStorage.getItem('student')
    if(loggedInStudent)
    dispatch(getAccount(loggedInStudent))
  },[])

  return (
    <div>
        <h1 style={{backgroundColor:"#381DFC", color:"whitesmoke"}}>{student.name}</h1>
        <p style={{backgroundColor:"#89A9FF"}}>{student.email}</p>
        <img src={student.picture} alt="" />
        {/* <button onClick={onLogout}>Logout</button> */}
    </div>
  )
}

export default Student