"use client";

import télé from '../assets/hero_sections/télé.svg'
import profit from '../assets/hero_sections/profit.png'
import insit from '../assets/hero_sections/insit.gif'
import { useEffect, useState } from 'react';
import "../styles/section1.css"
import { Link } from 'react-router';
export default function Section1() {

    const [showFirstText, setShowFirstText] = useState(false);
    const [showSecondText, setShowSecondText] = useState(false);
    const [showThreeText, setShowThreeText] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        // Animation des textes
        const textTimers = [
            setTimeout(() => setShowFirstText(true), 500),    // "DEVELOPPEUR WEB" apparaît après 0.5s
            setTimeout(() => setShowSecondText(true), 1200),  // "FRONTEND" apparaît après 1.2s (0.7s après le premier)
            setTimeout(() => setShowThreeText(true), 1900),   // 3ème texte après 1.9s (0.7s après)
            setTimeout(() => setShowImage(true), 2400),       // Image après 2.4s (0.5s après)
            setTimeout(() => setShowButton(true), 3000),      // Bouton après 3s (0.6s après l'image)
        ];

        return () => {
            textTimers.forEach(clearTimeout); // Nettoyage des timeouts
        };
    }, []);


    return (
        <div id="accueil" className={` hero-bg w-full flex flex-col items-center mt-6`}>
            <div className='w-full flex bg-[#F5F5F5] shadow-[0_-7px_15px_-1px_rgba(0,0,0,0.14),0_10px_18px_-1px_rgba(0,0,0,0.14)] border-dashed border-t-[1px] border-[#06E07F]'>

                <div className="w-[90%] flex m-auto justify-between">
                    <div className='flex max-sm:flex-col w-full items-center gap-2 md:gap-28'>
                        {/* Groupe de textes version ordinateur */}
                        <div className='lg:block max-sm:hidden md:hidden'>
                            <div className='flex flex-col'>
                                <p className={`font-bold text-[#000000] text-[18px] md:text-[26px] lg:text-[32px] ${showFirstText ? "opacity-100" : "opacity-0"
                                    }`}> Je suis </p>
                                <span className={`span text_dev font-extrabold text-[18px] md:text-[26px] lg:text-[32px] ${showSecondText ? "opacity-100" : "opacity-0"
                                    }`} >
                                </span>
                            </div>
                            <h3 className={`text-[14px] text-[#000000]  mb-2 ${showThreeText ? "opacity-100" : "opacity-0"
                                }`}>Curieux et créatif, j'aime concevoir des interfaces modernes,  <br />
                                intuitives qui offrent une expérience utilisateur fluide et la logique metier. <br /> J'accorde une
                                attention particulière aux détails et à l'ergonomie pour <br /> rendre chaque 
                                projet agréable à utiliser.
                            </h3>
                            <a href="/CV_Developpeur-web.pdf"
                                download="CV_Developpeur-web.pdf">
                            <button className={`text-lg text-white bg-[#06E07F] hover:bg-[#05C76D] transition duration-300 px-1.5 py-0.5 md:px-3 md:py-0.5 flex items-center gap-1 cursor-pointer md:rounded-3xl rounded-xl ${showButton ? "opacity-100" : "opacity-0"
                                }`}>
                                Télécharger CV
                                <span><img src={télé} alt="télé" className={`w-4 md:w-[18px] h-auto`} /></span>
                            </button>
                            </a>

                        </div>
                        {/* Groupe de textes version portable et tablet */}
                        <div className='lg:hidden flex flex-col md:flex mb-6 items-center'>
                            <div className='flex flex-col items-center text-center'>
                                <p className={` font-bold text-[#000000] text-[18px] md:text-[28px] lg:text-[32px] ${showFirstText ? "opacity-100" : "opacity-0"
                                    }`}>Je suis
                                </p>
                                <span className={` span text_dev font-extrabold text-[18px] text-[#06E07F] md:text-[28px] lg:text-[32px] ${showSecondText ? "opacity-100" : "opacity-0"
                                    }`}></span>
                            </div>
                            <img src={profit} alt='profit' className={`block md:block lg:hidden w-[250px] md:w-[300px] h-auto ${showThreeText ? "opacity-100" : "opacity-0"
                                }`} />
                            <h3 className={`${showImage ? "opacity-100" : "opacity-0"
                                } text-[14px] md:text-[16px] font-medium mb-4 text-center text-[#000000] `}>Curieux et créatif, j'aime concevoir des interfaces  modernes, 
                                intuitives qui offrent une expérience utilisateur fluide et la logique metier. J'accorde une
                                attention particulière aux détails et à l'ergonomie pour rendre chaque
                                projet agréable à utiliser.
                            </h3>
                            <a
                                href="/CV_Developpeur-web.pdf"  // fichier dans /public
                                download="CV_Developpeur-web.pdf"
                                className={`text-lg text-white bg-[#06E07F] hover:bg-[#05C76D] transition duration-300 px-1.5 py-0.5 md:px-3 md:py-0.5 flex items-center gap-1 cursor-pointer md:rounded-3xl rounded-xl ${showButton ? "opacity-100" : "opacity-0"}`}
                            >
                                Télécharger CV
                                <span>
                                    <img src={télé} alt="télé" className="w-4 md:w-[18px] h-auto" />
                                </span>
                            </a>

                        </div>
                        {/* Mon profil version ordinateur */}
                        <div className='lg:block max-sm:hidden md:hidden'>
                            <img src={profit} alt='profit' className={`-[110px] max-sm:hidden md:w-[150px] lg:w-[350px] flex h-auto  ${showImage ? "opacity-100" : "opacity-0"
                                }`} />
                        </div>
                    </div>
                    <div className='lg:block max-sm:hidden md:hidden'>
                        <img src={insit} alt="insit" className='w-[70px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
