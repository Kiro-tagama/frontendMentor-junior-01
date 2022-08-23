import { Menu, Transition } from '@headlessui/react'

import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-menu.svg'
import closeMenu from '../assets/images/icon-close-menu.svg'

import arrowUp from '../assets/images/icon-arrow-up.svg'
import arrowDown from '../assets/images/icon-arrow-down.svg'

import calendar from '../assets/images/icon-calendar.svg'
import planning from '../assets/images/icon-planning.svg'
import reminders from '../assets/images/icon-reminders.svg'
import todo from '../assets/images/icon-todo.svg'

function features(){return (
  <Menu>
    <Menu.Button className='bt flex items-center'>
      Feartures <img src={arrowDown}/>
    </Menu.Button>
    <Transition
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
    <Menu.Items className='bt itemsList'>
      <a href=""><img src={todo}/>Todo List</a>
      <a href=""><img src={calendar}/>Calendar</a>
      <a href=""><img src={reminders}/>Reminders</a>
      <a href=""><img src={planning}/>Planning</a>
    </Menu.Items>
    </Transition>
  </Menu>
)}

function company(){return (
  <Menu>
    <Menu.Button className='bt flex items-center'>
      Company <img src={arrowDown}/>
    </Menu.Button>
    <Transition
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
    <Menu.Items className='itemsList'>
      <a href="">History</a>
      <a href="">Our Team</a>
      <a href="">Blog</a>
    </Menu.Items>
    </Transition>
  </Menu>
)}

const options=(
  <div className='flex flex-1 flex-row flex-warp'>
    <div className='flex flex-1 px-5 items-center flex-warp'>
      {features()}
      {company()}
      <p className='bt text-c2'>Careers</p>
      <a href="" className='bt'>About</a>
    </div>
    <div className='flex flex-row flex-wrap'>
      <button>Login</button>
      <button className=' border-c3 border-2'>Registe</button>
    </div>
  </div>
)

const mobileMenu=(
  <Menu>
    <Menu.Button className='w-full '>
      <img src={menu}/>
    </Menu.Button>
    <Transition
      enter="transition ease-out duration-500"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-500"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
    <Menu.Items className='itemsMobile
    '>
      <Menu.Button className='w-full flex justify-end mb-2'>
        <img src={closeMenu}/>
      </Menu.Button>
      {features()}
      {company()}
      <p className='bt text-c2'>Careers</p>
      <a href="" className='bt'>About</a>
      <br />
      <div className='flex flex-col justify-between mt-4'>
      <button>Login</button>
      <button className=' border-c3 border-2'>Registe</button>
      </div>
    </Menu.Items>
    </Transition>
  </Menu>
)

export default function Header(params) {
  return(
    <nav className="flex flex-row items-center p-3 w-[100vw] max-w-[1440px]">
      <div className='flex flex-1 justify-between'>
        <img src={logo} />
        <span className='mobile'>
          {mobileMenu}
        </span>
      </div>

      <span className='desktop w-full'>
        {options}
      </span>
    </nav>
  )
}