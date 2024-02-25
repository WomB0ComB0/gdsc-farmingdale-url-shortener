import React from 'react'
import { Toaster } from 'sonner'

export const Events: React.FC<{
  children: React.ReactNode
}> = ({children}) => {
  return (
    <>
      <Toaster position={`top-center`} />
      {children}
    </>
  )
}
