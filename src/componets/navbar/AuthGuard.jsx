import React from 'react'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router'

const AuthGuard = ({children}) => {
   const navigate = useNavigate()

   const { user, loading } = useAuth()
   if(loading) return <h2>loading...</h2>

  return (
    <div>
        {user ? children : navigate("/login")}
    </div>
  )
}

export default AuthGuard