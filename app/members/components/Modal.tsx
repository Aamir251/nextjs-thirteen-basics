'use client'

import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'

const TeamModal = ({ children } : { children : ReactNode }) => {
  const router = useRouter()
  const handleClick = () => {

    router.back()
  }
  return (
    <div onClick={handleClick} className='h-screen w-screen fixed top-0 left-0 bg-red-100 flex justify-center items-center'>
      <div className='h-72 w-72 mx-auto'>
        {children}
      </div>
    </div>
  )
}

export default TeamModal