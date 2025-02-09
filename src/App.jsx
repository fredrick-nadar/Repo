import React, { useState, useEffect } from 'react'
import '/dist/style.css'
import Home from './components/Home'
import styled from 'styled-components'
import Timeline from "./components/Timeline";
import { Bg_Text } from "./components/Bg_Text";
import Squares from "./components/Squares";


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <StyledWrapper $loading={loading}>
      <div className="relative min-h-screen w-full">
        <div className="relative z-10">
          <Squares 
            direction="right" 
            speed={1}
            className="w-full"
            amount={20}
          >
            {/* Hero Section */}
            <section className="min-h-screen">
              <Bg_Text />
            </section>

            {/* Timeline Section - Add margin-top */}
            <section className="w-full mt-20">
              <Timeline />
            </section>
          </Squares>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  min-height: 100vh;
  opacity: ${props => (props.$loading ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
  
  .content {
    visibility: ${props => (props.$loading ? 'hidden' : 'visible')};
  }
`

export default App