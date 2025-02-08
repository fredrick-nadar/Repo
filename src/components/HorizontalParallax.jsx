// import { useRef, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import styled from 'styled-components';

// const ParallaxContainer = styled.div`
//   height: 100vh;
//   width: 100%;
//   position: relative;
//   overflow: hidden;
//   background: transparent;
// `;

// const images = [
//   "https://images.unsplash.com/photo-1738771321771-972e87edffa7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
//   "https://images.unsplash.com/photo-1738851941930-0f2e4a87c0c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1738694237335-a537515c0b7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1738258644135-29aa538dfa6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1738614647383-0435fcb26a55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1737543456099-9e88da04eaef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D",
// ];

// export default function HorizontalParallax() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

//   return (
//     <ParallaxContainer ref={containerRef}>
//       <div className="relative w-full h-[60vh] overflow-hidden flex items-center">
//         <motion.div 
//           style={{ x }} 
//           className="flex space-x-6 absolute p-10"
//         >
//           {images.map((src, index) => (
//             <motion.div 
//               key={index} 
//               className="flex-shrink-0 w-[40vw] h-[50vh] rounded-xl shadow-lg overflow-hidden"
//             >
//               <img 
//                 src={src} 
//                 alt={`Random ${index}`} 
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </ParallaxContainer>
//   );
// } 