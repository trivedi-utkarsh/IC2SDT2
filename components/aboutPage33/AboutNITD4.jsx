import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutNITD({ college }) {
  return (
    <section id="about-nitd" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Block with image + overlapping text */}
        <motion.div
          className="relative flex flex-col md:flex-row items-center md:items-stretch gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:w-3/5 overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700">
            <Image
              src={college.image1}
              alt="NIT Delhi"
              width={900}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <motion.div
            className="md:w-2/5 bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:-ml-16 z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">{college.heading1}</h3>
            <p className="text-gray-700 text-lg leading-8 mb-4">{college.text1}</p>
            <p className="text-gray-700 text-lg leading-8 mb-4">{college.text2}</p>
            <p className="text-gray-700 text-lg leading-8">{college.text3}</p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-1 mx-auto bg-blue-500 rounded-full"></div>

        {/* Second block with alternating layout */}
        <motion.div
          className="relative flex flex-col md:flex-row-reverse items-center md:items-stretch gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:w-3/5 overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700">
            <Image
              src={college.image2}
              alt="NIT Campus"
              width={900}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <motion.div
            className="md:w-2/5 bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:-mr-16 z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">{college.heading2}</h3>
            <p className="text-gray-700 text-lg leading-8 mb-4">{college.text4}</p>
            <ul className="list-disc ml-8 mb-4 text-gray-800 text-base leading-relaxed space-y-2">
              {college.bullets &&
                college.bullets.map((ele, idx) => (
                  <li key={idx}>{ele}</li>
                ))}
            </ul>
            <p className="text-gray-700 text-lg leading-8">{college.text5}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
