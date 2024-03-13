import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <P>Homebaby</P>

      <UserButton afterSignOutUrl='' />
    </div>
  )
}

export default Home