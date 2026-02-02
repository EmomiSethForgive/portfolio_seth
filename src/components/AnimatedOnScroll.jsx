// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// animation disparition après chargement

// export default function AnimatedOnScroll({ children }) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect(); // pour n'animer qu'une fois
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// animation disparition continue au scroll

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// export default function AnimatedOnScroll({ children }) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting); // true si visible, false sinon
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// export default function AnimatedOnScroll({ children }) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // détecte mobile / tablette
//     const checkScreen = () => setIsMobile(window.innerWidth < 768);
//     checkScreen();
//     window.addEventListener("resize", checkScreen);

//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   useEffect(() => {
//     if (isMobile) {
//       setIsVisible(true); // pas d'animation sur mobile
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, [isMobile]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={false}
//       animate={
//         isVisible
//           ? { opacity: 1, y: 0 }
//           : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// }


import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedOnScroll({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(40);

  // Ajuste l'intensité selon l'écran
  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth < 640) {
        setOffset(15);      // mobile
      } else if (window.innerWidth < 1024) {
        setOffset(25);      // tablette
      } else {
        setOffset(40);      // desktop
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  // Observer CONTINU
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : offset,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
