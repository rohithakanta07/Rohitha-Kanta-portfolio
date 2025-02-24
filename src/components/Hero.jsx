import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';

export default function Hero({ visitorCount }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(236, 72, 153, 0.3)',
                  '0 0 60px rgba(236, 72, 153, 0.3)',
                  '0 0 20px rgba(236, 72, 153, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="w-full h-full rounded-full overflow-hidden border-4 border-pink-500 p-2"
            >
                <img
                  src="./profile/image.png"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />

            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="absolute -top-2 -right-2 bg-pink-500 rounded-full px-3 py-1 text-xs font-semibold"
            >
              #{visitorCount}
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-left"
        >
          <h2 className="text-pink-500 text-xl mb-2">Hi, I'm</h2>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Rohitha Kanta
          </h1>
          <div className="text-2xl lg:text-3xl text-gray-300 mb-6">
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'UI Designer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </div>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            B.Tech in Computer Science student passionate about creating
            beautiful, functional, and user-friendly applications. Skilled in
            React, Node.js, and modern web technologies.
          </p>

          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/rohithakanta07"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-pink-600 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:rohithakanta07@gmail.com"
              className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-purple-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
