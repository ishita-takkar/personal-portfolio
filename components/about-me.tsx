"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react"

const timelineData = [
  {
    id: 1,
    company: "Tech Jockey E-Commerce Platform",
    role: "Data Analyst Intern",
    period: "Aug 2024 – Sep 2024",
    location: "New Delhi, IN",
    type: "Internship",
    logo: "/company-a-logo.svg",
    skills: ["SQL", "Python", "Git", "Data Analysis"],
    description:
      "Utilized Sequel Pro to write SQL queries, delivering actionable data insights across multiple departments. Streamlined data retrieval processes, achieving a 25% improvement in efficiency.",
  },
  {
    id: 2,
    company: "Jacobs Center for Health Innovation – UC San Diego",
    role: "Research Assistant",
    period: "Apr 2025 – Present",
    location: "La Jolla, CA",
    type: "Research",
    logo: "/ucsd-logo.svg",
    skills: ["AI", "Healthcare", "Research", "Ethics"],
    description:
      "Study real-world applications of predictive and generative AI in healthcare delivery. Co-authoring a review paper on best practices for predictive and generative AI in healthcare delivery.",
  },
  {
    id: 3,
    company: "Halıcıoğlu Data Science Institute – UC San Diego",
    role: "Data Science Instructional Assistant",
    period: "Jan 2025 – Mar 2025",
    location: "La Jolla, CA",
    type: "Teaching",
    logo: "/ucsd-logo.svg",
    skills: ["Python", "Teaching", "Debugging", "OOP"],
    description:
      "Supported over 300 students in DSC 20 through weekly office hours and exam review sessions. Addressed student questions on Python, debugging, recursion, and object-oriented programming.",
  },
]

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-gray-100 to-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">About Me</span>
            <span className="ml-2">👩‍💻</span>
          </h2>

          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Education
              </span>
              <span className="ml-2 text-gray-700">🎓</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="p-6 bg-white/80 rounded-2xl backdrop-blur-sm border border-gray-300">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-800">Bachelor of Science in Data Science</h3>
                    <h4 className="text-lg text-purple-600">University Of California San Diego</h4>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mt-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Sep 2023 – Jun 2027</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">La Jolla, CA</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 mb-3">
                    <strong>Relevant Coursework:</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures and Algorithms",
                      "Object-Oriented Programming",
                      "Theoretical Foundations of Data Science",
                      "Relational Data Management",
                      "Linear Algebra",
                      "Probability and Statistical Methods",
                      "Machine Learning",
                    ].map((course, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Experience
              </span>
              <span className="ml-2 text-gray-700">💼</span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-6 bg-white/50 rounded-xl backdrop-blur-sm border border-gray-300">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={56}
                            height={56}
                            className="rounded-full"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-gray-800">{item.role}</h3>
                          <h4 className="text-lg text-purple-600">{item.company}</h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-4 text-center md:text-left">{item.description}</p>
                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-500 border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
