'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-slate-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love building scalable applications that solve real-world problems.
              </p>
              <p className="text-lg leading-relaxed">
                With a strong foundation in both frontend and backend development, I create seamless user 
                experiences combined with robust server-side architecture.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                or working on creative side projects.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-accent mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Full Stack Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Problem Solving
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Continuous Learner
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
