import { useState } from 'react'
import { MenuBerger } from './MenuBerger'

import logo from '../assets/headers/logo.svg'
import home from '../assets/headers/home.svg'
import apropos from '../assets/headers/apropos.svg'
import compétences from '../assets/headers/compétences.svg'
import réalisations from '../assets/headers/réalisations.svg'
import contact from '../assets/headers/contact.svg'
import menu from '../assets/headers/menu.svg'
function Header() {
    const [isOpen, setIsOpen] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false); // État pour la visibilité de la liste

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleList = () => {
    setIsListVisible(!isListVisible); // Bascule l'affichage de la liste
  };
    return(

       <header className='w-full flex flex-col items-center pt-6 max-sm:pt-4'>
        <div className='flex w-[90%] items-center justify-between'>
            {/* Logo */}
            <div>
                <img src={logo} className='w-[110px] md:w-[168px] lg:w-[180px] h-auto' alt="Logo"/>
            </div>
            {/* Buttons Navigation */}
            <div className='lg:gap-5 max-sm:hidden md:hidden lg:flex'>
                <button className=' text-lg text-[#000000] flex gap-1 items-center cursor-pointer'>
                    <span><img src={home} alt="home" className=' w-4 md:w-[18px] h-auto ' /></span>
                    Accueil
                </button>
                <button className=' text-lg  text-[#000000] flex gap-1 items-center cursor-pointer'>
                    <span><img src={apropos} alt="A propos" className=' w-4 md:w-[18px] h-auto ' /></span>
                    A propos
                </button>
                <button className=' text-lg  text-[#000000] flex gap-1 items-center cursor-pointer'>
                    <span><img src={compétences} alt="compétences" className=' w-4 md:w-[18px] h-auto ' /></span>
                    Compétences
                </button>
                <button className=' text-lg  text-[#000000] flex gap-1 items-center cursor-pointer'>
                    <span><img src={réalisations} alt="réalisations" className=' w-4.5 md:w-5 h-auto ' /></span>
                    Réalisations
                </button>
                <button className=' text-lg  text-[#06E07F] bg-transparent hover:text-white hover:bg-[#06E07F] transition duration-300 px-3 py-0.5 flex items-center gap-1 cursor-pointer border-2 border-[#06E07F] md:rounded-3xl rounded-xl shadow shadow-[#06E07F]  '>
                    <span><img src={contact} alt="contact" className=' w-4 md:w-[18px] h-auto ' /></span>
                    Contact
                </button>
            </div>
             {/* Menuberger */}
          <div className="lg:hidden md:block max-sm:block cursor-pointer">
            <img
              className=" w-6 h-auto md:w-8 "
              src={menu}
              alt="Toggle Menu"
              onClick={toggleMenu}
            />
            </div>
        </div>
        {/* Menu burger */}
        <MenuBerger isOpen={isOpen} toggleMenu={toggleMenu} />
      </header>
    )
    
}

export default Header