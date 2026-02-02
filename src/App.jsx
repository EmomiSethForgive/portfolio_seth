// // // import { useState } from 'react'

// // import Header from './components/Header.jsx'
// // // import reactLogo from './assets/react.svg'
// // // import viteLogo from '/vite.svg'
// // import Section1 from './components/Section1.jsx'
// // import Section2 from './components/Section2.jsx'
// // import Section3 from './components/Section3.jsx'
// // import Section4 from './components/Section4.jsx'
// // import Section5 from './components/Section5.jsx'
// // import Footer from './components/Footer.jsx'

// // function App() {

// //   return (
// //     <>
// //     <Header />
// //     <Section1 />
// //     <Section2 />
// //     <Section3 />
// //     <Section4 />
// //     <Section5 />
// //     <Footer />
// //     </>
// //   )
// // }

// // export default App


// import Header from './components/Header.jsx'
// import Section1 from './components/Section1.jsx'
// import Section2 from './components/Section2.jsx'
// import Section3 from './components/Section3.jsx'
// import Section4 from './components/Section4.jsx'
// import Section5 from './components/Section5.jsx'
// import Footer from './components/Footer.jsx'
// import Graphisme from './components/Graphisme.jsx'

// function App() {
//   return (
//     <>
//       <Header />
//       <Animatehorizontalscroll><Section1 /></Animatehorizontalscroll>
//       <AnimatedOnScroll><Section2 /></AnimatedOnScroll>
//       <AnimatedOnScroll><Section3 /></AnimatedOnScroll>
//       <Animatehorizontalscroll><Section4 /></Animatehorizontalscroll>
//       <AnimatedOnScroll><Graphisme /></AnimatedOnScroll>
//       <AnimatedOnScroll><Section5 /></AnimatedOnScroll>
//       <Footer />
//     </>
//   )
// }

// export default App


import Header from "./components/Header";
import AnimatedOnScroll from './components/AnimatedOnScroll.jsx'
import Animatehorizontalscroll from './components/Animatehorizontalscroll.jsx'
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Graphisme from "./components/Graphisme";
import Graphisme2 from "./components/Graphisme2";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Header />
      <Animatehorizontalscroll><Section1 /></Animatehorizontalscroll>
      <AnimatedOnScroll><Section2 /></AnimatedOnScroll>
      <AnimatedOnScroll><Section3 /></AnimatedOnScroll>
      <Section4 />
      <Graphisme />
      <Animatehorizontalscroll><Graphisme2 /></Animatehorizontalscroll>
       <AnimatedOnScroll><Section5 /></AnimatedOnScroll>
      <Footer />
    </>
  );
}
