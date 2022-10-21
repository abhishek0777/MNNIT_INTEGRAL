import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const student=useSelector((state)=>state.student)

  if(!student){
    <Navigate to='/'/>
  }
  return children
}

export default ProtectedRoute