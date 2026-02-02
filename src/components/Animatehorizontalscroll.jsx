// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// export default function AAnimatehorizontalscroll({ children }) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: 50 }}          // Décalage à droite (hors écran)
//       animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}  // Arrivée à la position normale
//       transition={{ duration: 0.7, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// }


import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Animatehorizontalscroll({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={
        isVisible
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: 50 }
      }
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
