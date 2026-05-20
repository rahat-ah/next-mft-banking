import React from 'react'

function homeLayout({children}: {children : React.ReactNode}) {
  return (
    <>
      <div>homeLayout page</div>
      {children}
    </>
    
  )
}

export default homeLayout