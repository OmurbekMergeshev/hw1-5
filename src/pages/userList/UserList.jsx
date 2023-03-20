import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserList = () => {

  const navigate = useNavigate()

  const goToBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <button onClick={goToBack}>back</button>
        <h2>User List</h2>
        <p>Welcome my Website</p>
    </div>
  )
}

export default UserList