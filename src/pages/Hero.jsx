import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="mt-10">
      <motion.p 
        className="text-lg"
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.5 }}
      >
        íº€ I'm Fakhur Ul Din, a Cybersecurity Analyst specializing in Penetration Testing, SOC Operations, Malware Analysis & Digital Forensics.
      </motion.p>
    </section>
  )
}

export default Hero
