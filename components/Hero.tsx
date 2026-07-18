'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm Kiran
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Full Stack Developer & Designer crafting beautiful, functional web experiences
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 flex items-center justify-center gap-2"
          >
            View My Work <HiArrowRight />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold rounded-lg transition duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <p className="text-slate-400 mb-2">Scroll to explore</p>
          <div className="text-2xl text-accent">↓</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
