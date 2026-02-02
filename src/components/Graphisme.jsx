
// import { design } from '../data/design'
// import "../styles/graphisme.css"

// export default function Graphisme() {

//   return (
//     <div className="w-full mb-6">
//       <div className="w-[90%] gap-6 pt-3 m-auto flex flex-col">
//         <p className="font-bold text-[20px] md:text-[24px] text-[#06E07F] lg:text-[28px] text-center">
//           Mes réalisations en Graphisme et ui design
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 lg:gap-6">
//           {design.map(({ id, imageId }) => (
//             <div
//               key={id}
//               className=" graph flex flex-col px-1 gap-3 md:gap-4 rounded-lg bg-[#FFFFFF] border border-[#E8E8E8] shadow-lg py-2 shadow-[rgba(0,0,0,0.50)] "
//             >
//               <img
//                 className="w-full"
//                 src={imageId}
//                 alt="design"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }





import { design } from "../data/design";
import AnimatedCard from "./AnimatedCard";

export default function Graphisme() {
  return (
    <div className="w-full mb-6 lg lg:hidden max-sm:block md:block">
      <div className="w-[90%] gap-6 pt-3 m-auto flex flex-col">
        <p className="font-bold text-[20px] md:text-[24px] lg:text-[28px] text-[#06E07F] text-center">
          Mes réalisations en Graphisme & UI Design
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {design.map(({ id, imageId }) => (
            <AnimatedCard key={id}>
              <div className="rounded-xl shadow-lg bg-white p-2">
                <img src={imageId} alt="design" className="w-full rounded-lg" />
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
