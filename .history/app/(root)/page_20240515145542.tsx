import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <p> <h1 className="p-5">
          Unleash Your Creative Vision with Imaginify
        </h1>
      </p>

      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Home