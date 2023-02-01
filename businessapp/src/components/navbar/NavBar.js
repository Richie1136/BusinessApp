import { useState } from "react"
import { close, logo, menu } from '../../assets'
import { navLinks } from '../../constants'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="HooBank logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={isMenuOpen ? close : menu} alt='menu logo' className="w-[28px] h-[28px] object-contain" onClick={handleToggle} />
      </div>
    </nav>
  )
}

export default NavBar