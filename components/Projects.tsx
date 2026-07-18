'use client'

import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  link?: string
  github?: string
  image?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com',
    link: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team workspace management.',
    tech: ['React', 'Firebase', 'Zustand', 'Tailwind CSS', 'WebSocket'],
    github: 'https://github.com',
    link: 'https://example.com',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool leveraging GPT API with advanced prompt engineering.',
    tech: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL', 'Vercel'],
    github: 'https://github.com',
    link: 'https://example.com',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization and custom reporting features.',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Recharts'],
    github: 'https://github.com',
    link: 'https://example.com',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-accent">Featured Projects</h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group bg-secondary rounded-lg border border-slate-700 overflow-hidden hover:border-accent transition duration-300"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent hover:text-blue-400 transition"
                      >
                        <HiCode /> Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent hover:text-blue-400 transition"
                      >
                        <HiExternalLink /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
