import télé from '../assets/hero_sections/télé.svg'
import home from '../assets/hero_sections/home.svg'
import insit from '../assets/hero_sections/insit.gif'
export default function Section1() {
    return (
        <div className='w-full flex flex-col items-center mt-6'>
            <div className='w-full flex bg-[#F5F5F5] shadow-[0_-7px_15px_-1px_rgba(0,0,0,0.14),0_10px_18px_-1px_rgba(0,0,0,0.14)] border-dashed border-t-[1px] border-[#06E07F]'>

                <div className="w-[90%] flex m-auto justify-between">
                    <div className='flex max-sm:flex-col w-full items-center gap-2 md:gap-28'>
                        {/* Groupe de textes version ordinateur */}
                        <div className='lg:block max-sm:hidden md:hidden'>
                            <div className='flex flex-col'>
                                <p className="font-bold text-[#000000]  text-[18px] md:text-[26px] lg:text-[32px] ">DEVELOPPEUR WEB
                                </p>
                                <p className="font-bold text-[#000000] text-[18px] md:text-[26px] lg:text-[32px] ">FRONTEND   </p>
                            </div>
                            <h3 className='text-[14px] text-[#000000]  mb-2'>Curieux et créatif, j'aime concevoir des interfaces     modernes     et <br />
                                intuitives qui offrent une expérience utilisateur fluide. J'accorde une <br />
                                attention particulière aux détails et à l'ergonomie pour rendre chaque <br />
                                projet agréable à utiliser.
                            </h3>
                            <button className='text-lg text-white bg-[#06E07F] hover:bg-[#05C76D] transition duration-300 px-1.5 py-0.5 md:px-3 md:py-0.5 flex items-center gap-1 cursor-pointer md:rounded-3xl rounded-xl'>
                                Télécharger CV
                                <span><img src={télé} alt="télé" className=' w-4 md:w-[18px] h-auto ' /></span>
                            </button>

                        </div>
                        {/* Groupe de textes version portable et tablet */}
                        <div className='lg:hidden flex flex-col md:flex mb-6 items-center'>
                            <div className='flex flex-col items-center text-center'>
                                <p className="font-bold text-[#000000] text-[18px] md:text-[28px] lg:text-[32px] ">DEVELOPPEUR WEB
                                </p>
                                <p className="font-bold text-[18px] text-[#06E07F] md:text-[28px] lg:text-[32px] ">FRONTEND   </p>
                            </div>
                            <img src={home} alt='home' className='block md:block lg:hidden w-[250px] md:w-[300px] h-auto ' />
                            <h3 className='text-[14px] md:text-[16px] font-medium mb-4 text-center text-[#000000] '>Curieux et créatif, j'aime concevoir des interfaces     modernes     et
                                intuitives qui offrent une expérience utilisateur fluide. J'accorde une
                                attention particulière aux détails et à l'ergonomie pour rendre chaque
                                projet agréable à utiliser.
                            </h3>
                            <button className='text-lg text-white bg-[#06E07F] hover:bg-[#05C76D] transition duration-300 px-1.5 py-0.5 md:px-3 md:py-0.5 flex items-center gap-1 cursor-pointer  md:rounded-3xl rounded-xl'>
                                Télécharger CV
                                <span><img src={télé} alt="télé" className=' w-4 md:w-[18px] h-auto ' /></span>
                            </button>

                        </div>
                        {/* Mon profil version ordinateur */}
                        <div className='lg:block max-sm:hidden md:hidden'>
                            <img src={home} alt='home' className='-[110px] max-sm:hidden md:w-[150px] lg:w-[350px] flex h-auto ' />
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
