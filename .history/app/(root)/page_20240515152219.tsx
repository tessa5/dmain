import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
       <h1 className="p-5 text-3xl">
          Unleash Your Creative Vision with Discovery-Mind
        </h1>
      

      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Home