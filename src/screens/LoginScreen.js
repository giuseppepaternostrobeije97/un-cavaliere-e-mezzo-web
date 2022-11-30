import React from 'react'
import { Login } from 'un-cavaliere-e-mezzo-library'
import { useNavigate } from 'react-router-dom/dist'

const LoginScreen = () => {

  const navigate = useNavigate()

  const goToLobby = () => {
    navigate('lobby')
  }

  const goToRegister = () => {
    navigate('register')
  }

  return (
    <div className='container'>
        <Login
        callbackLogin={goToLobby}
        callbackRegister={goToRegister}
        />
    </div>
  )
}

export default LoginScreen