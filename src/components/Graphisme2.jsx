
 import { design } from '../data/design'
 import "../styles/graphisme.css"

 export default function Graphisme2() {
   return (
     <div className="w-full mb-6 md:hidden lg:block max-sm:hidden">
       <div className="w-[90%] gap-6 pt-3 m-auto flex flex-col">
         <p className="font-bold text-[20px] md:text-[24px] lg:text-[28px] text-[#06E07F] text-center">
           Mes réalisations en Graphisme et UI Design
         </p>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 lg:gap-6">
           {design.map(({ id, imageId }) => (
             <div
               key={id}
               className="
                 graph
                 flex flex-col
                 px-1 py-2
                 gap-3
                 rounded-lg
                 bg-white
                 border border-[#E8E8E8]
                 shadow-lg
                 transition-all
               "
             >
               <img
                 src={imageId}
                 alt="design"
                 className="w-full h-auto rounded-md"
               />
             </div>
           ))}
         </div>
       </div>
     </div>
   )
 }