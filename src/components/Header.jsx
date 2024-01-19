import React from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import {removeUser} from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selector = useSelector(store=>store.user)

  const handleSignOut = async ()=>{
    
      const signOutUser = await signOut(auth);
      dispatch(removeUser)
      navigate('/')
  }
  return (
    <div className='flex items-center px-6 py-1 w-full absolute bg-gradient-to-b from-black justify-between'>
      <img className='w-32 h-20' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      <div>
        {selector && <button className='bg-red-500 text-white font-semibold px-3 py-2 uppercase rounded-md' onClick={handleSignOut}>LogOut</button>}
      </div>
    </div>
  )
}

export default Header