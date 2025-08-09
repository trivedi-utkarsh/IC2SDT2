import ImageSlider from "components/previouseditionPage/slider";

const about1 = [
    "/sliderimages/about/slide1.png",
    "/sliderimages/about/Picture3.png",
    "/sliderimages/about/Picture4.png",
    "/sliderimages/about/Picture5.png",
    "/sliderimages/about/Picture6.png",
    "/sliderimages/about/Picture7.png",
    "/sliderimages/about/slide2.jpg",
    "/sliderimages/about/slide3.jpg",
];

const about2 = [
    "/sliderimages/about/slide4.jpg",
    "/sliderimages/about/slide5.jpg",
    "/sliderimages/about/slide6.jpg",
    "/sliderimages/about/Picture9.png",
    "/sliderimages/about/Picture10.png",
    "/sliderimages/about/Picture11.png",
    "/sliderimages/about/Picture12.png",
    "/sliderimages/about/Picture13.png",
    "/sliderimages/about/Picture14.png",
    "/sliderimages/about/Picture15.png",
];

export default function AboutNITD({ college }) {
    return (
        <section id="about" className="w-full py-8">
            {/* Section 1 */}
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-start">
                {/* Text with matched height */}
                <div className="h-[400px overflow-hidden">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-3">{college.heading1}</h2>
                    <div className="h-[340px] overflow-y-auto pr-2 text-sm text-gray-700 custom-scrollbar">
                        <p className="mb-2">{college.text1}</p>
                        <p className="mb-2">{college.text2}</p>
                        <p>{college.text3}</p>
                    </div>
                </div>

                {/* Image with matched height */}
                <div className="h-[400px] w-full overflow-hidden rounded-xl shadow-md">
                    <ImageSlider images={about1} />
                </div>
            </div>

            {/* Section 2 */}
            <div className="max-w-7xl mx-auto mt-8 px-4 grid md:grid-cols-2 gap-6 items-start">
                {/* Image */}
                <div className="h-[400px] w-full overflow-hidden rounded-xl shadow-md">
                    <ImageSlider images={about2} className="object-contain"/>
                </div>

                {/* Text with scroll */}
                <div className="h-[400px] overflow-hidden">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-3">{college.heading2}</h2>
                    <div className="h-[340px] overflow-y-auto pr-2 text-sm text-gray-700 custom-scrollbar">
                        <p className="mb-4">{college.text4}</p>
                        <ul className="list-disc ml-5 mb-4 space-y-1">
                            {college.bullets?.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <p>{college.text5}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
