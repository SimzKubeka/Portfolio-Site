import logo from '../assets/simsKubLogo_20.png'
import { FaLinkedin,FaGithub,FaInstagram } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className='flex mb-10 items-center justify-between py-4'>
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="SK Logo" className='h-13 w-13' />
      </div>
      <div className='m-4 flex items-center justify-center gap-2 text-2xl'>
        <a href="https://www.linkedin.com/in/simphiwe-kubeka-9238b0178/" target="_blank" rel="noreferrer" className="mr-4">
          <FaLinkedin  />
        </a>
        <a href="https://github.com/SimzKubeka/" target="_blank" rel="noreferrer" className="mr-4">
          <FaGithub  />
        </a>
        <a href="https://www.instagram.com/its.the.sims/" target="_blank" rel="noreferrer" className="mr-4">
          <FaInstagram  />
        </a>
        
      </div>
    </nav>
  )
}

export default Navbar