import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Users.css'


const Users = () => {
    
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data)
        })
        .catch( error => {
            console.log(error)
        })
    }, [])


  return (
    <div>
        <h2>Users:</h2>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users