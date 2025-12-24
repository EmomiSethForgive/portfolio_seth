import mail from '../assets/technologies/mail.svg'
import envoyer from '../assets/technologies/envoyer.svg'
import phone from '../assets/technologies/phone.svg'
import géo from '../assets/technologies/géo.svg'
import link from '../assets/technologies/link.svg'
import hub from '../assets/technologies/hub.svg'

export default function Section5() {
    return (
        <div className="w-full bg-[#F5F5F5]">
            <div className="w-[90%] gap-6 pt-3 pb-4 m-auto flex flex-col">
                <div className='max-sm:w-full'>
                    <p className="font-bold text-[20px] md:text-[24px] lg:text-[28px] text-[#06E07F] text-center mb-2">Mes contacts</p>
                    {/* reseaux sociaux et formulaires versions ordinateur */}
                    <div className='lg:flex max-sm:hidden md:hidden gap-3 md:gap-4 max-sm:w-full md:justify-between items-center'>

                        {/* reseaux */}
                        <div className="flex flex-col gap-3.5 max-sm:w-full">
                            <div className="flex items-center px max-sm:justify-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <img src={mail} alt="mail" className="w-6 h-6 md:w-9 md:h-9" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000000] text-lg font-bold">e-mail</p>
                                    <p className="text-[#06E07F] text-sm md:text-lg font-bold">tamaraforgive2@gmail.com</p>
                                    <p className="text-[#000000] text-sm md:text-lg ">Pour toute demande de projet ou collaboration.</p>
                                </div>
                            </div>
                            <div className="flex items-center max-sm:justify-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <img src={phone} alt="phone" className="w-6 h-6 md:w-9 md:h-9" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000000] text-lg font-bold">Téléphone</p>
                                    <p className="text-[#06E07F] text-sm md:text-lg font-bold">+241 62 27 67 34 / 76 46 90 05</p>
                                    <p className="text-[#000000] text-sm md:text-lg ">Disponible pour toute demande de projet.</p>
                                </div>
                            </div>
                            <div className="flex items-center max-sm:justify-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <img src={géo} alt="géo" className="w-6 h-6 md:w-9 md:h-9" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000000] text-lg font-bold">Localisation</p>
                                    <p className="text-[#06E07F] text-sm md:text-lg font-bold">Gabon / Owendo</p>
                                    <p className="text-[#000000] text-sm md:text-lg ">Disponible pour des projets à distance.</p>
                                </div>
                            </div>
                            <div className="flex flex-col max-sm:items-center max-sm:justify-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <p className="text-[#000000] text-lg font-bold">Réseaux Sociaux</p>
                                <div className='flex gap-4 md:ml-4'>
                                    <a href="">
                                    <img src={link} alt="link" className="w-6 h-6 md:w-9 md:h-9" />
                                    </a>
                                    <a href="https://github.com/">
                                    <img src={hub} alt="hub" className="w-6 h-6 md:w-9 md:h-9" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Formulaires */}
                        <div className='flex max-sm:w-full flex-col gap-3 md:gap-7 items-center'>
                            <p className='font-bold text-lg md:text-xl text-[#000000] '>Envoyez-moi un message</p>
                            <form action="" method="post" className='flex flex-col gap-3 md:gap-4 items-center max-sm:w-full'>
                                {/* Groupe1  */}
                                <div className='flex gap-3 md:gap-4 items-center max-sm:flex-col max-sm:w-full'>
                                    <input type="text" name="nom" placeholder='Nom' className='border border-[#06E07F] h-9 max-sm:w-full  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]' />
                                    <input type="text" name="prenom" placeholder='Prenom' className='border border-[#06E07F] h-9 max-sm:w-full  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]' />
                                </div>
                                {/* Groupe2 */}
                                <div className='flex gap-3 md:gap-4 items-center max-sm:flex-col max-sm:w-full'> 
                                        <input type="number" name="téléphone" placeholder='Téléphone' className='border border-[#06E07F] h-9 max-sm:w-full  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]' />
                                        <input type="email" name="mail" placeholder='e-mail' className='border border-[#06E07F] h-9 max-sm:w-full  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]' />
                                </div>
                                {/* Groupes3 */}
                                <div className='flex gap-3 md:gap-4 items-center flex-col w-full'>
                                    <input type="text" name="sujet" placeholder='Sujet' className='border border-[#06E07F] h-16 max-sm:w-full  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F] w-full' />
                                    <textarea name="message" id="" placeholder='Message' className='border border-[#06E07F] h-28 md:h-32 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F] w-full' ></textarea>
                                </div>
                                <div>
                                    <button className='text-lg text-white bg-[#06E07F] hover:bg-[#05C76D] transition duration-300 px-1.5 py-0.5 md:px-3 md:py-0.5 flex items-center gap-1 cursor-pointer  md:rounded-3xl rounded-xl'>
                                        Envoyer
                                        <span><img src={envoyer} alt="envoyer" className=' w-4 md:w-[18px] h-auto ' /></span>
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                    {/* reseaux sociaux et formulaires version portable et tablet */}
                    <div className='flex flex-col md:flex-col lg:hidden gap-3 md:gap-4 max-sm:w-full md:justify-between items-center'>

                        {/* reseaux */}
                        <div className="flex flex-col gap-3.5 md:gap-5 w-full">
                            <div className="flex items-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <img src={mail} alt="mail" className="w-6 h-6 md:w-9 md:h-9" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000000] text-lg font-bold">e-mail</p>
                                    <p className="text-[#06E07F] text-sm md:text-lg font-bold">tamaraforgive2@gmail.com</p>
                                    <p className="text-[#000000] text-sm md:text-lg ">Pour toute demande de projet ou collaboration.</p>
                                </div>
                            </div>
                            <div className="flex items-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <img src={phone} alt="phone" className="w-6 h-6 md:w-9 md:h-9" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000000] text-lg font-bold">Téléphone</p>
                                    <p className="text-[#06E07F] text-sm md:text-lg font-bold">+241 62 27 67 34 / 76 46 90 05</p>
                                    <p className="text-[#000000] text-sm md:text-lg ">Disponible pour toute demande de projet.</p>
                                </div>
                            </div>
                            <div className="flex items-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <img src={géo} alt="géo" className="w-6 h-6 md:w-9 md:h-9" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000000] text-lg font-bold">Localisation</p>
                                    <p className="text-[#06E07F] text-sm md:text-lg font-bold">Gabon / Owendo</p>
                                    <p className="text-[#000000] text-sm md:text-lg ">Disponible pour des projets à distance.</p>
                                </div>
                            </div>
                            <div className="flex flex-col max-sm:items-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <p className="text-[#000000] text-lg font-bold">Réseaux Sociaux</p>
                                <div className='flex gap-4 md:ml-4'>
                                    <a href="">
                                    <img src={link} alt="link" className="w-6 h-6 md:w-9 md:h-9" />
                                    </a>
                                    <a href="https://github.com/">
                                    <img src={hub} alt="hub" className="w-6 h-6 md:w-9 md:h-9" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Formulaires */}
                        <div className='flex w-full flex-col gap-3 md:gap-9 items-center'>
                            <p className='font-bold text-lg md:text-xl text-[#000000] '>Envoyez-moi un message</p>
                            <form action="" method="post" className='flex flex-col gap-3 md:gap-4 items-center w-full'>
                                {/* Groupe1  */}
                                <div className='flex gap-3 md:gap-4 items-center flex-col w-full'>
                                    <input type="text" name="nom" placeholder='Nom' className='border border-[#06E07F] h-9 w-full  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]' />
                                    <input type="text" name="prenom" placeholder='Prenom' className='border border-[#06E07F] h-9 w-full  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]' />
                                </div>
                                {/* Groupe2 */}
                                <div className='flex gap-3 md:gap-4 items-center flex-col w-full'> 
                                        <input type="number" name="téléphone" placeholder='Téléphone' className='border border-[#06E07F] h-9 w-full  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]' />
                                        <input type="email" name="mail" placeholder='e-mail' className='border border-[#06E07F] h-9 w-full  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]' />
                                </div>
                                {/* Groupes3 */}
                                <div className='flex gap-3 md:gap-4 items-center flex-col w-full'>
                                    <input type="text" name="sujet" placeholder='Sujet' className='border border-[#06E07F] h-16 max-sm:w-full  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F] w-full' />
                                    <textarea name="message" id="" placeholder='Message' className='border border-[#06E07F] h-28 md:h-32 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F] w-full' ></textarea>
                                </div>
                                <div>
                                    <button className='text-lg text-white bg-[#06E07F] hover:bg-[#05C76D] transition duration-300 px-1.5 py-0.5 md:px-3 md:py-0.5 flex items-center gap-1 cursor-pointer  md:rounded-3xl rounded-xl'>
                                        Envoyer
                                        <span><img src={envoyer} alt="envoyer" className=' w-4 md:w-[18px] h-auto ' /></span>
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
