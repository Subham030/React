import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' }
  }
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center px-6 font-work">
      {/* Real 3D Element */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-yellow-400"
          whileHover={{ scale: 1.02 }}
        >
          Future in Focus
          <br />
          <span className="text-green-400">With YarrowTech</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Building high-performance systems, crafted for scale and impact.
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">
          <motion.a
            href="#"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg shadow-lg font-medium transition"
          >
            Get Started
          </motion.a>
          <motion.a
            href="#"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 border border-yellow-400 text-yellow-300 hover:text-white hover:border-white rounded-lg font-medium transition"
          >
            Learn More
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
