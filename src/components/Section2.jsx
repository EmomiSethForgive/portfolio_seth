import "../styles/section2.css"

export default function Section2() {
  return (
 
    <div id="apropos" className="w-full bg-[rgba(0,0,0,0.09)]">
      <div className="w-[90%] gap-6 pt-6 pb-7 m-auto  flex flex-col">
        <div className="flex flex-col mx-2.5 gap-3 md:gap-6">
            <p className="font-bold text-[20px] md:text-[24px] text-[#06E07F] lg:text-[28px] text-center">A propos</p>
            {/* responsive destop */}
            <div className="lg:flex w-full items-center justify-around max-sm:flex-col md:hidden max-sm:hidden">
                <div className=" flex flex-col w-full lg:w-[30%] md:w-full md:pb-2 max-sm:mb-2 px-5 justify-center md:gap-5 gap-3 aspect-square rounded-full items-center text-center bg-white border-2 border-[#06E07F]">
                    <h2 className="font-bold text-[18px] md:text-[20px] lg:text-[22px]">Qui suis?</h2>
                    <p className="text-[16px] md:text-[16px] lg:text-[16px] text-center">Je suis un développeur passionné par la création d'applications web, site web modernes et performantes. Avec quelques mois d'expérience dans le développement front-end et en cours d'apprentissage dans le backend, je m'efforce de créer des expériences utilisateur exceptionnelles.</p>
                </div>
                <div className=" flex flex-col w-full lg:w-[30%] md:w-full md:pb-2 max-sm:mb-2 px-5 justify-center md:gap-5 gap-3 aspect-square rounded-full items-center text-center bg-white border-2 border-[#06E07F]">
                    <h2 className="font-bold text-[18px] md:text-[20px] lg:text-[22px]">Mon parcours</h2>
                    <p className="text-[16px] md:text-[16px] lg:text-[16px] text-center">Mon voyage dans le monde du développement a commencé après l'obtention de mon baccalauréat technologie CG. J'ai alors entamé ma formation dans cette magnifique toile.</p>
                </div>
            </div>
            {/* responsive portable et tablet */}
            <div className="flex w-full items-center gap-2 md:gap-4 justify-around flex-col md:flex lg:hidden">
                <div className=" flex flex-col w-full md:w-[75%] md:pb-2 max-sm:mb-2 px-5 justify-center md:gap-5 gap-3 aspect-square rounded-full items-center text-center bg-white border-2 border-[#06E07F]">
                    <h2 className="font-bold text-[18px] md:text-[24px]">Qui suis?</h2>
                    <p className="text-[16px] md:text-[18px] text-center">Je suis un développeur passionné par la création d'applications web, site web modernes et performantes. Avec quelques mois d'expérience dans le développement front-end et en cours d'apprentissage dans le backend, je m'efforce de créer des expériences utilisateur efficaces.</p>
                </div>
                <div className=" flex flex-col w-full md:w-[75%] md:pb-2 max-sm:mb-2 px-5 justify-center md:gap-5 gap-3 aspect-square rounded-full items-center text-center bg-white border-2 border-[#06E07F]">
                    <h2 className="font-bold text-[18px] md:text-[24px]">Mon parcours</h2>
                    <p className="text-[16px] md:text-[18px] text-center">Mon voyage dans le monde du développement a commencé après l'obtention de mon baccalauréat technologie CG. J'ai alors entamé ma formation dans cette magnifique toile.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
