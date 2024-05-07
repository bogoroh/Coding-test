import React from 'react'
import DownArrow from '../svgs/DownArrow'

export default function TopHeader() {
  return (
    <div className='h-12 bg-primary flex items-center justify-end gap-2 px-[84px] underline underline-offset-auto cursor-pointer'>
        Hi, Barbara
        <DownArrow color='#000000' />
    </div>
  )
}
