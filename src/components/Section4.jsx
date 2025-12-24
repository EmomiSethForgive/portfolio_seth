import envoyer from '../assets/technologies/envoyer.svg'
import { projet } from '../data/projet'

export default function Section4() {
  return (
    <div className="w-full mb-6">
      <div className="w-[90%] gap-6 pt-3 m-auto flex flex-col">
        <p className="font-bold text-[20px] md:text-[24px] text-[#06E07F] lg:text-[28px] text-center">
        Mes réalisations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 lg:gap-6">
          {projet.map(({id, imageId, text, tech1, tech2, tech3, button }) => (
            <div
              key={id}
              className="flex flex-col px-1 gap-3 md:gap-4 rounded-lg bg-[#FFFFFF] border border-[#E8E8E8] shadow-lg py-2 shadow-[rgba(0,0,0,0.50)] "
            >
              <img
                className="w-full"
                src={imageId}
                alt="projet"

              />
              <p className="font-bold text-lg md:text-xl ml-4 md:ml-4 lg:text-2xl ">
                {text}
              </p>
              <div className="flex gap-2 md:gap-3 ml-4 md:ml-3">
                <p className="text-sm md:text-base lg:text-lg bg-[#E8E8E8] rounded-md px-2">
                  {tech1}
                </p>
                <p className="text-sm md:text-base lg:text-lg bg-[#E8E8E8] rounded-md px-2">
                  {tech2}
                </p>
                <p className="text-sm md:text-base lg:text-lg bg-[#E8E8E8] rounded-md px-2">
                  {tech3}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-[#06E07F] flex items-center justify-center text-sm md:text-base lg:text-lg text-white px-3 cursor-pointer py-1 rounded-md gap-2 hover:bg-[#05C76D] transition duration-300">
                  {button}
                  <img
                    className="w-[20px] h-[20px] inline-block"
                    src={envoyer}
                    alt="envoyer"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
