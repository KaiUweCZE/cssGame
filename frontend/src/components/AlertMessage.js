import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlertMessage = () => {
    const navigate = useNavigate()
  return (
    <div className='message__alert'>
        <h2>You are not logged in</h2>
        <button onClick={() => navigate("/login")}>login</button>
    </div>
  )
}

export default AlertMessage