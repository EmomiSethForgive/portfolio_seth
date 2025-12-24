"use client";

import React, { useState } from "react"
import { motion } from "motion/react"
import plus from '../assets/headers/plus.svg'
import mobilhome from '../assets/headers/mobilhome.svg'
import mobilcompétences from '../assets/headers/mobilcompétences.svg'
import mobilapropos from '../assets/headers/mobilapropos.svg' 
import mobilréalisation from '../assets/headers/mobilréalisation.svg'
import contact from '../assets/headers/contact.svg'

export function MenuBerger({ isOpen, toggleMenu }) {
  return (
    <motion.ul
      initial={{ opacity: 0, x: "-100%" }}
      animate={{
        opacity: isOpen ? 1 : 0,
        x: isOpen ? 0 : "-100%",
      }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full z-40 bg-[#06E07F] py-4 flex flex-col items-center space-y-4"
    >
      <div
        className="lg:hidden cursor-pointer hover:scale-105 transition-transform"
        onClick={toggleMenu}
      >
        <img src={plus} alt="plus" className=" w-[35px] h-auto " />
      </div>
      <div className="flex flex-col gap-2.5 md:gap-4 items-center">
          <button className="text-white flex items-center gap-1 text-lg md:text-xl cursor-pointer">
            <span> <img src={mobilhome} alt="mobil home" className=" w-4 h-4" /></span>
            Accueil
          </button>
        <button className="text-white text-lg md:text-xl flex items-center gap-1 cursor-pointer">
       <span>   <img src={mobilapropos} alt="A propos" className="w-4 h-4" /></span>
          A propos
        </button>
        <button className="text-white flex text-lg md:text-xl items-center gap-1 cursor-pointer">
        <span><img src={mobilcompétences} alt="mobil compétences" className="w-4 h-4" /></span>
          Compétences
        </button>
        <button className="text-white flex items-center gap-1 text-lg md:text-xl cursor-pointer">
          <span> <img src={mobilréalisation} alt="mobil réalisations" className="w-5 h-5" /></span>
          Réalisations
        </button>
        <button className="text-[#06E07F] bg-white text-lg md:text-xl text-center px-1.5 py-0.5 md:px-2.5 md:py-1 flex items-center gap-1 cursor-pointer md:rounded-2xl rounded-xl hover:bg-gray-200 transition duration-300 ">
            <span> <img src={contact} alt="contact" className="w-4 h-4" /></span>
            Contact
        </button>
        {/* style={{ filter: "drop-shadow(0 2px 2px #06E07F)" }} */}
      </div>
    </motion.ul>
  );
}
