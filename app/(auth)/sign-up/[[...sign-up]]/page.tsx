import React from 'react'
import { SignUp } from '@clerk/nextjs'

const SignUpComponent = () => {
  return (
    <main className='auth-page'>
      <SignUp />
    </main>
  )
}

export default SignUpComponent
