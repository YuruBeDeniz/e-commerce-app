import React from 'react'
import NavbarLeft from './NavbarItem/NavbarLeft'
import NavbarRight from './NavbarItem/NavbarRight'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between my-5'>
      <NavbarLeft />
      <NavbarRight />
    </div>
  )
}
