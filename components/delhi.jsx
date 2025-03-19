import { MapPin, Train, Bus, Plane } from "lucide-react";

export default function HowToReach() {
  return (
    <section
      id="how-to-reach"
      className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-12 animate-fadeInUp">
          How to Reach NIT Delhi
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-gray-700 text-lg leading-relaxed animate-fadeInLeft">
            <p className="text-justify">
              NIT Delhi is situated in the Institutional Area of Narela, New
              Delhi, with excellent connectivity via road, rail, and air.
            </p>
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 w-7 h-7" />
              <div>
                <h4 className="text-2xl font-bold text-blue-700 mb-1">By Road</h4>
                <p>
                  Well connected through major roads, buses, and cabs from all
                  over Delhi. Smooth access to Narela from major points in Delhi.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Train className="text-blue-600 w-7 h-7" />
              <div>
                <h4 className="text-2xl font-bold text-blue-700 mb-1">By Rail</h4>
                <p>
                  Nearest railway station: Narela (4 km). Major hub: New Delhi
                  Railway Station (35 km), connected via cab or metro.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Plane className="text-blue-600 w-7 h-7" />
              <div>
                <h4 className="text-2xl font-bold text-blue-700 mb-1">By Air</h4>
                <p>
                  Indira Gandhi International Airport is approximately 50 km away,
                  accessible via taxi or airport metro.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Bus className="text-blue-600 w-7 h-7" />
              <div>
                <h4 className="text-2xl font-bold text-blue-700 mb-1">
                  Nearest Metro Station
                </h4>
                <p>
                  Jahangirpuri Metro (Yellow Line) – 20 km, and Samaypur Badli – 15
                  km from the campus.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 animate-fadeInRight aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.7495055428053!2d77.13039097631508!3d28.816537775564807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1742387935847!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
