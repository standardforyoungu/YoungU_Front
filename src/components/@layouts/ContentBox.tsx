import React from 'react'

export default function ContentBox({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full px-[2rem] py-[1rem] my-10'>{children}</div>
  )
}
