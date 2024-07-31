import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store and features/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = ()=>{
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
    <button className='inline-bock ps-6 py-2 duration-200 hover:bg-blue-200 rounded-full '
    >Logout</button>
  )
}

export default LogoutBtn