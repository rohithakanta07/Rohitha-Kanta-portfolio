import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Aditya Engineering College, Surampalem",
    year: "2022-2026",
    description: "Computer Science and Technology"
  },
  {
    degree: "Intermediate MPC",
    institution: "Sri Chaitanya Junior College, Kakinada",
    year: "2019-2021"
  },
  {
    degree: "SSC",
    institution: "Aditya School, Kakinada",
    year: "2018-2019"
  }
];

const experience = [
  {
    role: "Fullstack Intern",
    company: "Technical Hub",
    description: [
      "Ensured cross-browser compatibility and responsiveness across various platforms",
      "Identified and fixed bugs and performance issues in web applications"
    ]
  }
];

const achievements = [
  "5-star proficiency in C, C++, Python, and Problem Solving on HackerRank",
  "Actively participated in multiple Ideathons and project expos",
  "Solved over 200+ algorithmic challenges on LeetCode",
  "Red Hat System Administrator certification",
  "IT Specialist certifications in HTML/CSS, Python Programming, and Java",
  "Completed certification courses in SQL and JavaScript"
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-gray-400">My academic and professional journey</p>
        </motion.div>

        <div className="flex overflow-x-auto scroll-container pb-4">
          <div className="flex space-x-6 md:grid md:grid-cols-3 md:gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 min-w-[300px] md:min-w-0 scroll-item"
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-sm text-purple-400">{edu.year}</p>
                    {edu.description && (
                      <p className="text-gray-400 mt-2">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 min-w-[300px] md:min-w-0 scroll-item"
            >
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.role} className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <p className="text-gray-400">{exp.company}</p>
                    <ul className="list-disc list-inside text-gray-400 mt-2">
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 min-w-[300px] md:min-w-0 scroll-item"
            >
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-2xl font-semibold">Achievements</h3>
              </div>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start"
                  >
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-400">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}