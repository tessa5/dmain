import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="root">
        <div className="root-container"
        {children}
    </main>
  )
}

export default Layout