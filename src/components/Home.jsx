import React from 'react'
import { Bg_Text } from './Bg_Text'
import '/dist/style.css'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen">
        <Bg_Text />
      </section>
    </div>
  )
}

export default Home