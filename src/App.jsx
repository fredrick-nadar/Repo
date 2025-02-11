import React, { useState, useEffect } from 'react'
import '/dist/style.css'
import styled from 'styled-components'
import Timeline from "./components/Timeline";
import { Bg_Text } from "./components/Bg_Text";
import Squares from "./components/Squares";
import { motion } from "framer-motion";
import Lenis from '@studio-freight/lenis'
import Gallery from "./components/Gallery";

function App() {
  const [loading, setLoading] = useState(true)
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    setLenis(lenisInstance);

    // Integrate Lenis with RAF
    function raf(time) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Loading state
    setTimeout(() => {
      setLoading(false)
    }, 1000)

    // Cleanup
    return () => {
      lenisInstance.destroy()
    }
  }, [])

  return (
    <StyledWrapper $loading={loading}>
      <motion.div 
        className="relative min-h-screen w-full overflow-hidden"
        style={{ position: 'relative' }}
      >
        <div className="relative z-10">
          <Squares 
            direction="right" 
            speed={1}
            className="w-full"
            amount={20}
          >
            {/* Hero Section */}
            <motion.section 
              className="min-h-screen relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Bg_Text />
            </motion.section>

            {/* Timeline Section */}
            <motion.section 
              className="w-full mt-20 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <Timeline />
            </motion.section>

            {/* Gallery Section */}
            <motion.section 
              className="w-full relative bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <Gallery lenis={lenis} />
            </motion.section>
          </Squares>
        </div>
      </motion.div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  min-height: 100vh;
  opacity: ${props => (props.$loading ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
  position: relative;
  
  .content {
    visibility: ${props => (props.$loading ? 'hidden' : 'visible')};
  }

  /* Optimize for smooth scrolling */
  html.lenis {
    height: auto;
  }

  .lenis.lenis-smooth {
    scroll-behavior: auto;
  }

  .lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
  }

  .lenis.lenis-stopped {
    overflow: hidden;
  }

  .lenis.lenis-scrolling iframe {
    pointer-events: none;
  }
`

export default App