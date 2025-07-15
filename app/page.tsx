"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, MessageSquare, PenTool } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // You can add a console.log here if you want to verify it's working
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
              Hey! I'm Ishita Takkar
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-600">
              📊 Data Science | Machine Learning | AI Enthusiast
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="projects" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
                What I've Built
              </span>
              <span className="ml-2 text-gray-900">🏗️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Rodent Riddle: Data Visualization Game"
                description="Built an interactive web app with D3.js to visualize mouse temperature and activity across 20,160 time points. Created a data-driven game to predict mouse type and estrus phase with dynamic visual feedback."
                tags={["JavaScript", "D3.js", "HTML/CSS", "Data Storytelling"]}
                date="May – Jun 2025"
              />
              <ProjectCard
                title="Recipe Ratings Analysis"
                description="Analyzed over 200,000 recipes to model rating patterns and ingredient-level impact using Random Forest. Improved R² from -0.34 to 0.007 and reduced RMSE from 4.79 to 4.45."
                tags={["Python", "Pandas", "Scikit-learn", "Plotly"]}
                date="Feb – Mar 2025"
              />
              <ProjectCard
                title="Language Modeling from Project Gutenberg"
                description="Processed and tokenized over 500,000 words from classic literature using regex. Built Uniform, Unigram, and up to 4-gram language models using conditional probability estimation."
                tags={["Python", "NLP", "Pandas", "Regex"]}
                date="Feb 2025"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
                Get In Touch
              </span>
              <span className="ml-2 text-gray-900">📧</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <form className="space-y-4" action="https://formspree.io/f/xdkdoejz" method="POST">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 text-gray-900 px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 text-gray-900 px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 text-gray-900 px-4 py-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white"
                  >
                    Send Message
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-600 mb-2">You can also reach me at:</p>
                  <div className="flex flex-col items-center gap-2">
                    <a href="mailto:itakkar@ucsd.edu" className="text-purple-600 hover:text-purple-700">
                      itakkar@ucsd.edu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/ishita-takkar" label="GitHub" />
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/ishita-takkar" label="LinkedIn" />
            <SocialIcon icon={<MessageSquare />} href="https://discord.com/users/ishitatakkar" label="Discord" />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Ishita Takkar. All rights reserved.</p>
            <div className="mt-2">
              <a href="mailto:itakkar@ucsd.edu" className="text-purple-600 hover:text-purple-700">
                itakkar@ucsd.edu
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, tags, date }) {
  return (
    <div className="p-6 rounded-lg bg-gray-50 border border-gray-200 hover:border-purple-600 transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className="text-sm text-gray-500 whitespace-nowrap ml-2">{date}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
