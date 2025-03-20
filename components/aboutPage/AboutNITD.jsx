import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutNITD({ college }) {
  return (
    <section id="about-nitd" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* First Block */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">{college.heading1}</h3>
            <p className="text-gray-700 text-lg leading-8 mb-4">{college.text1}</p>
            <p className="text-gray-700 text-lg leading-8 mb-4">{college.text2}</p>
            <p className="text-gray-700 text-lg leading-8">{college.text3}</p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500">
            <Image
              src={college.image2}
              alt="NIT Delhi"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-1 mx-auto bg-blue-500 rounded-full"></div>

        {/* Second Block with alternating layout */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="order-2 md:order-1 overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500">
            <Image
              src={college.image1}
              alt="NIT Delhi"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">{college.heading2}</h3>
            <p className="text-gray-700 text-lg leading-8 mb-4">{college.text4}</p>
            <ul className="list-disc ml-8 mb-4 text-gray-800 text-base leading-relaxed space-y-2">
              {college.bullets &&
                college.bullets.map((ele, idx) => (
                  <li key={idx}>{ele}</li>
                ))}
            </ul>
            <p className="text-gray-700 text-lg leading-8">{college.text5}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
