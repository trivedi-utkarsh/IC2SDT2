import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';

export default function Track({ heading, by, content, id, bullets }) {
  return (
    <section id={id} className="relative py-16 px-4 sm:px-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center text-blue-800 mb-6"
      >
        {heading}
      </motion.h1>

      <div className="max-w-4xl mx-auto text-center mb-10">
        {by.map((person, idx) => (
          <motion.h2
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.6 }}
            className="text-xl sm:text-2xl my-2 font-semibold text-purple-700"
          >
            {person}
          </motion.h2>
        ))}
      </div>

      <SparklesCore background="transparent" minSize={0.6} maxSize={1.2} particleDensity={50} className="absolute inset-0 z-0" particleColor="#a855f7"/>

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        {content.map((con, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="bg-white bg-opacity-60 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-10"
          >
            <p className="text-lg leading-8 text-gray-800 text-justify mb-4">{con}</p>
            {bullets && (
              <ul className="list-disc ml-6 text-gray-700 space-y-2 text-base">
                {bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
