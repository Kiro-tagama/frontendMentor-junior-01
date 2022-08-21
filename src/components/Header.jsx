import logo from '../assets/images/logo.svg'
export default function Header(params) {
  return(
    <nav className="flex flex-row items-center p-3 w-[100vw] max-w-[1440px]">
      <img src={logo} />
      <div className='flex flex-1 px-5'>
        Features
        Company
        Careers
        About
      </div>
      <div>
        <button>Login</button>
        <button className=' border-c3 border-2'>Registe</button>
      </div>
    </nav>
  )
}