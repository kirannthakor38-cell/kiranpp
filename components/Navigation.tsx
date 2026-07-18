'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-primary/80 backdrop-blur-md z-50 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-accent hover:text-blue-400 transition">
            Kiran
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-accent transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-accent"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-slate-700">
          <div className="px-4 py-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-300 hover:text-accent transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
