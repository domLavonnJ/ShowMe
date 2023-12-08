import React from 'react'
import { Navigate } from 'react-router-dom'

export const Course = () => {
    const shouldRedirect = true

  return (
    <div>
        <h1>Course</h1>
        {shouldRedirect && <Navigate replace to="/" />}


    </div>

  )
}
