import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const skills = [
  {
    title: "Languages",
    icon: <Code2 className="w-12 h-12 text-purple-500" />,
    description: "Proficient in C, C++, Python, Java, JavaScript, HTML, and CSS",
    items: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Frameworks",
    icon: <Layout className="w-12 h-12 text-purple-500" />,
    description: "Experience with modern web frameworks and libraries",
    items: ["React.js", "Express.js", "Next.js", "Node.js"]
  },
  {
    title: "Databases",
    icon: <Database className="w-12 h-12 text-purple-500" />,
    description: "Knowledge of database management systems",
    items: ["MongoDB", "MySQL"]
  },
  {
    title: "Tools",
    icon: <Terminal className="w-12 h-12 text-purple-500" />,
    description: "Proficient with development tools and version control",
    items: ["VS Code", "Git", "GitHub", "Jupyter"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-400">Technologies and tools I work with</p>
        </motion.div>

        <div className="flex overflow-x-auto scroll-container pb-4">
          <div className="flex space-x-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-700/50 transition-colors min-w-[300px] md:min-w-0 scroll-item"
              >
                <div className="flex flex-col items-center text-center">
                  {skill.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{skill.title}</h3>
                  <p className="text-gray-400 mb-4">{skill.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="bg-purple-900/50 backdrop-blur-sm text-sm text-white px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}