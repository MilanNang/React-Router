import React from 'react'
import { useParams } from 'react-router'


function User() {
    const {id} =useParams()
    return (
    <div>user:{id}</div>
  )
}

export default User