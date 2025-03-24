import Image from "next/image";
import nitdLongLogo from "@/public/nitd-logo-labeled-blue.png";

export default function AboutColleges() {
  return (
    <section id="about" className="bg-primary10 px-4 sm:px-8 py-12 my-8 rounded-2xl shadow-md">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-blue-700 pb-8">
          Organised by
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-16 space-y-10 md:space-y-0">
          <div className="flex flex-1 flex-col items-center text-center space-y-4">
            {/* <Image
              src={nitdLongLogo}
              alt="National Institute of Technology Delhi Logo"
              quality={100}
              className="w-full max-w-xs md:max-w-md object-contain"
            /> */}
            <p className="text-blue-700 font-bold uppercase md:tex-xl">
              Department of Computer Science & Engineering
            </p>
            <p className="text-blue-700 font-bold uppercase text-xl md:text-2xl">
              National Institute of Technology Delhi
            </p>
          </div>
          <div className="flex-1">
            <p className="text-justify text-gray-700 leading-relaxed text-base md:text-lg">
              National Institute of Technology Delhi is a premier public technical autonomous institution
              located in New Delhi. NIT Delhi is an Institution of National Importance and aims to
              provide instructions and research facilities in various disciplines of Engineering, Science
              and Technology, Management, Social Sciences and Humanities for advance learning and
              dissemination of knowledge. The mission of NIT Delhi is to produce human resources who
              are creative, competitive, and innovative with high intellect and ethical values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
