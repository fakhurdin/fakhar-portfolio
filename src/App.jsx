import React from 'react'
import { motion } from 'framer-motion'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="px-4 md:px-12">
      <motion.h1 
        className="text-4xl text-accent mt-8 font-bold"
        animate={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{ duration: 1.2 }}
      >
        Fakhur Ul Din – Cybersecurity & Forensics
      </motion.h1>
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
