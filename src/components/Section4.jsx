// import { Link } from 'react-router'
// import envoyer from '../assets/technologies/envoyer.svg'
// import { projet } from '../data/projet'
// import "../styles/section4.css"

// export default function Section4() {

//   return (
//     <div id="réalisations" className="w-full mb-6">
//       <div className="w-[90%] gap-6 pt-3 m-auto flex flex-col">
//         <p className="font-bold text-[20px] md:text-[24px] text-[#06E07F] lg:text-[28px] text-center">
//           Mes réalisations en Developpement web
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 lg:gap-6">
//           {projet.map(({ id, imageId, text, tech1, tech2, tech3, url, button }) => (
//             <div
//               key={id}
//               className=" card4 flex flex-col px-1 gap-3 md:gap-4 rounded-lg bg-[#FFFFFF] border border-[#E8E8E8] shadow-lg py-2 shadow-[rgba(0,0,0,0.50)] "
//             >
//               <img
//                 className="w-full"
//                 src={imageId}
//                 alt="projet"

//               />
//               <p className="font-bold text-lg md:text-xl ml-4 md:ml-4 lg:text-2xl ">
//                 {text}
//               </p>
//               <div className="flex gap-2 md:gap-3 ml-4 md:ml-3">
//                 <p className="text-sm md:text-base lg:text-lg bg-[#E8E8E8] rounded-md px-2">
//                   {tech1}
//                 </p>
//                 <p className="text-sm md:text-base lg:text-lg bg-[#E8E8E8] rounded-md px-2">
//                   {tech2}
//                 </p>
//                 <p className="text-sm md:text-base lg:text-lg bg-[#E8E8E8] rounded-md px-2">
//                   {tech3}
//                 </p>
//               </div>
//               <div className="flex items-center justify-center">
//                 <a
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#06E07F] flex items-center justify-center text-sm md:text-base lg:text-lg text-white px-3 cursor-pointer py-1 rounded-md gap-2 hover:bg-[#05C76D] transition duration-300"
//                 >
//                   {button}
//                   <img
//                     className="w-[20px] h-[20px] inline-block"
//                     src={envoyer}
//                     alt="envoyer"
//                   />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }



// import envoyer from '../assets/technologies/envoyer.svg'
// import { projet } from '../data/projet'
// import "../styles/section4.css"

// export default function Section4() {
//   return (
//     <div id="réalisations" className="w-full mb-6">
//       <div className="w-[90%] gap-6 pt-3 m-auto flex flex-col">
//         <p className="font-bold text-[20px] md:text-[24px] lg:text-[28px] text-[#06E07F] text-center">
//           Mes réalisations en Développement Web
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 lg:gap-6">
//           {projet.map(({ id, imageId, text, tech1, tech2, tech3, url, button }) => (
//             <div
//               key={id}
//               className="
//                 card4
//                 flex flex-col
//                 px-2 py-3
//                 gap-3
//                 rounded-xl
//                 bg-white
//                 border border-[#E8E8E8]
//                 shadow-lg
//               "
//             >
//               <img src={imageId} alt="projet" className="w-full rounded-md" />

//               <p className="font-bold text-lg md:text-xl lg:text-2xl ml-2">
//                 {text}
//               </p>

//               <div className="flex gap-2 ml-2 flex-wrap">
//                 {[tech1, tech2, tech3].map((tech, i) => (
//                   <span
//                     key={i}
//                     className="text-sm md:text-base bg-[#E8E8E8] rounded-md px-2"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-center mt-2">
//                 <a
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     bg-[#06E07F]
//                     hover:bg-[#05C76D]
//                     transition
//                     text-white
//                     px-4 py-1
//                     rounded-md
//                     flex items-center gap-2
//                   "
//                 >
//                   {button}
//                   <img src={envoyer} alt="envoyer" className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

import AnimatedCard from "./AnimatedCard";
import envoyer from "../assets/technologies/envoyer.svg";
import { projet } from "../data/projet";

export default function Section4() {
  return (
    <div id="réalisations" className="w-full mb-6">
      <div className="w-[90%] gap-6 pt-3 m-auto flex flex-col">
        <p className="font-bold text-[20px] md:text-[24px] lg:text-[28px] text-[#06E07F] text-center">
          Mes réalisations en Développement web
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projet.map(({ id, imageId, text, tech1, tech2, tech3, url, button }) => (
            <AnimatedCard key={id}>
              <div className="flex flex-col gap-3 rounded-xl bg-white shadow-lg py-3">
                <img src={imageId} alt="projet" className="w-full rounded-md" />

                <p className="font-bold text-lg md:text-xl ml-4">{text}</p>

                <div className="flex gap-2 ml-4">
                  {[tech1, tech2, tech3].map((tech, i) => (
                    <span key={i} className="text-sm bg-[#E8E8E8] px-2 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mt-2 bg-[#06E07F] text-white px-4 py-1 rounded-md flex items-center gap-2 hover:bg-[#05C76D] transition"
                >
                  {button}
                  <img src={envoyer} alt="envoyer" className="w-5" />
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
