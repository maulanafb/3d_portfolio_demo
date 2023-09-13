import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { NavLink } from 'react-router-dom'
import { logo, menu, close } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link to='/' className='flex items-center gap-2' onClick={() => { setActive(); window.scrollTo(0, 0) }}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>MaulanaFb &nbsp;<span className='sm:block hidden'>| Web Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link, i) =>
          (
            <li key={Link.id} className={`${active === Link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}><a href={`#${Link.id}`} onClick={() => setActive(Link.title)}>{Link.title}</a></li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} className='w-[28px] h-[28px] object-contain cursor-pointer transition-all duration-300' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-opacity duration-300`}>
            <ul className='list-none flex flex-col items-start gap-4 justify-end'>
              {navLinks.map((Link, i) =>
              (
                <li key={Link.id} className={`${active === Link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}><a href={`#${Link.id}`} onClick={() => { setToggle(!toggle); setActive(Link.title) }}>{Link.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar