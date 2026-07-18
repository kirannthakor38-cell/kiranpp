'use client'

import { HiGithub, HiTwitter, HiLinkedin } from 'react-icons/hi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: HiGithub,
      url: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: HiTwitter,
      url: 'https://twitter.com',
      label: 'Twitter',
    },
    {
      icon: HiLinkedin,
      url: 'https://linkedin.com',
      label: 'LinkedIn',
    },
  ]

  return (
    <footer className="bg-secondary border-t border-slate-700 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-2">Kiran</h3>
            <p className="text-slate-400">
              Full Stack Developer & Designer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-accent transition">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent transition">Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-2xl text-slate-400 hover:text-accent transition"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Kiran. All rights reserved.</p>
          <p className="text-sm mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
