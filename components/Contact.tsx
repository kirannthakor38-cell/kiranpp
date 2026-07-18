'use client'

import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiMapPin } from 'react-icons/hi'

export default function Contact() {
  const contactMethods = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'hello@kiranpp.com',
      link: 'mailto:hello@kiranpp.com',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: HiMapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Get In Touch</h2>
            <p className="text-slate-300 text-lg">
              Let's connect and explore how we can work together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.label}
                  href={method.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary rounded-lg p-6 border border-slate-700 hover:border-accent transition duration-300 text-center group"
                >
                  <Icon className="text-4xl text-accent mx-auto mb-4 group-hover:scale-110 transition transform" />
                  <h3 className="text-xl font-bold text-white mb-2">{method.label}</h3>
                  <p className="text-slate-300">{method.value}</p>
                </motion.a>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-lg p-8 border border-slate-700"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-primary border border-slate-700 rounded-lg text-white focus:outline-none focus:border-accent transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-primary border border-slate-700 rounded-lg text-white focus:outline-none focus:border-accent transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 bg-primary border border-slate-700 rounded-lg text-white focus:outline-none focus:border-accent transition resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
