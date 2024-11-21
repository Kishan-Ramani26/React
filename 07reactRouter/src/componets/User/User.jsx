import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const {userid} = useParams()
  return (
    <div>User:{userid}</div>
  )
}
