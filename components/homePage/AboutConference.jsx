export default function AboutConference() {
    return (
      <section
        id="about-conference"
        className="bg-white py-12 px-4 sm:px-8 my-8 rounded-2xl shadow-md"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-8">
            About the Conference
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-6 text-justify text-base md:text-lg">
            <p>
              The year 2025 marks a pivotal moment in computer science and digital technologies,
              witnessing groundbreaking advancements like quantum computing, AI, IoT, and cybersecurity
              innovations. Quantum computing promises to revolutionize fields from cryptography to
              climate modeling. AI systems will show deeper contextual understanding, focusing on
              ethical deployment and transparency.
            </p>
            <p>
              The Internet of Things (IoT) has integrated into healthcare, agriculture, and smart cities,
              empowered by 5G connectivity. Cybersecurity evolves with next-generation solutions,
              including AI-based threat detection and decentralized identity management.
            </p>
            <p>
              Additionally, computational biology and bioinformatics are driving breakthroughs in
              genomics and personalized medicine.
            </p>
            <p>
              These innovations will be at the heart of the International Conference, fostering
              collaboration among researchers, industry leaders, and policymakers.
            </p>
          </div>
          <p className="mt-8 italic font-semibold text-center text-green-700 text-base md:text-lg">
            Accepted papers will be submitted for inclusion in IEEE Xplore subject to meeting IEEE scope and quality requirements.
          </p>
        </div>
      </section>
    );
  }
  