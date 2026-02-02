// import { technos } from "../data/technologies";
// import "../styles/section3.css"


// export default function Section3() {
//     return (
//         <div id="competences" className="w-full">
//             <div className="w-full bg-[#F5F5F5] shadow-[0_-7px_15px_-1px_rgba(0,0,0,0.14),0_10px_18px_-1px_rgba(0,0,0,0.14)]">
//                 <div className="w-[90%] gap-6 pt-3 pb-4 m-auto flex flex-col">
//                     <p  className="font-bold text-[20px] md:text-[24px] text-[#06E07F] lg:text-[28px] text-center">Mes compétences</p>
//                     <div className="card grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-4 lg:gap-6">
//                         {technos.map(({id, imageurl}) => (
//                             <div key={id} className="flex items-center justify-center rounded-lg bg-[#E8E8E8] border border-[#06E07F] shadow-md py-6 shadow-[rgba(0,0,0,0.50)] ">
//                                 <img src={imageurl} alt="Full images" className="w-[40px] md:w-[60px] lg:w-[100px]" />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


import { technos } from "../data/technologies";
import "../styles/section3.css";

export default function Section3() {
  return (
    <section id="competences" className="w-full">
      <div className="w-full bg-[#F5F5F5] shadow-[0_-7px_15px_-1px_rgba(0,0,0,0.14),0_10px_18px_-1px_rgba(0,0,0,0.14)]">
        <div className="w-[90%] mx-auto pt-6 pb-8 flex flex-col gap-6">
          
          <h2 className="font-bold text-[20px] md:text-[24px] lg:text-[28px] text-center text-[#06E07F]">
            Mes compétences
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {technos.map(({ id, imageurl }) => (
              <div key={id} className="tech-card">
                <img
                  src={imageurl}
                  alt="techno"
                  className="w-[40px] md:w-[60px] lg:w-[90px]"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
