import React from 'react'
import { SignIn } from '@clerk/nextjs'

const SignInComponent = () => {
  return (
    <main className='auth-page'>
      <SignIn />
    </main>
  )
}

export default SignInComponent
