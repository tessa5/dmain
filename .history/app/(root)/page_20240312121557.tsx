import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <P>Homebaby</P>

      <UserButton after />
    </div>
  )
}

export default Home