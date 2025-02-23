'use client';
import "./speakers.css";
import "./tracks.css";
import ImageSlider from "./slider.jsx";
import manoj from '@/public/keynote/manojMishra.jpg'
import manindra from '@/public/keynote/ManindraAgarwal.jpg'
import selva from '@/public/keynote/selvaKumar.jpg'
import sharma from '@/public/keynote/sharmaChakraborty.jpg'
import moin from '@/public/keynote/moinUddin.jpg'
import React, { useState,useEffect } from "react";
import Image from "next/image"
import nitdAdmin from '@/public/nitd_admin.jpg'
import nitdAcad from '@/public/nitd_acad.jpg'
import Link from "next/link";
import Track from "@/components/homePage/Track_Pages/tracks/Track";
import data_analytics from "@/assets/icons/data_mining.png";
import cryptography from "@/assets/icons/cryptography.png";
import iot from "@/assets/icons/IoT.png";
import ai from "@/assets/icons/ai.png";
import healthcare from "@/assets/icons/healthcare.png";
import { useSpring,animated } from "react-spring";


function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
        reset: true, // Forces animation reset on re-render
    });

    return (
        <animated.span style={{ display: "inline-block" }}>
            {number.to((n) => n.toFixed(0))}
        </animated.span>
    );
}

export default function Previous() {
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey((prevKey) => prevKey + 1);
    }, []); // Runs once on mount
    const themes = [
        {
            name: "DATA ANALYTICS AND MINING",
            imageUrl: data_analytics,
            link: "#dataanalytics",
            text: (
                <>
                    The track on data analysis and mining serves as a dynamic and information-rich forum where
                    professionals, researchers, and experts converge to explore the latest developments, challenges,
                    and innovations in the field. The field of data analytics and mining is characterized by constant
                    innovation and adaptation to emerging technologies and data sources. Key trends include the
                    increasing adoption of artificial intelligence and machine learning techniques for more advanced
                    and accurate analysis, the growing importance of real-time analytics for timely insights, and the
                    emphasis on data privacy and security in the wake of evolving regulations. Additionally, the
                    fusion of data analytics with other technologies like the Internet of Things (IoT) and edge
                    computing is opening up new possibilities for data-driven insights in various industries. The
                    topics include, but are not limited to:
                    <ul className="list-disc pl-5">
                        <li>Data retrieval</li>
                        <li>Big Data Storage techniques</li>
                        <li>Data Mining and warehousing</li>
                        <li>Data visualization</li>
                        <li>Scalability and portability issues</li>
                        <li>Parallel processing of big data</li>
                        <li>Web mining, text mining, sentiment analysis</li>
                        <li>Novel theoretical and computational models</li>
                    </ul>
                </>
            )
        },
        {
            name: "CRYPTOGRAPHY, CYBER SECURITY AND NETWORK SECURITY",
            imageUrl: cryptography,
            link: "#cryptography",
            text: (
                <>
                    Computer network security consists of measures taken by some organizations or businesses to
                    monitor and avoid unauthorized access from outside attackers. In the initial days of the internet,
                    its use was limited to development purposes. The topics in the track include but are not limited to
                    Design and security analysis of cryptographic primitives and protocols, Novel applications of
                    cryptography, Formal verification of cryptographic security properties, Cryptographic standards,
                    Post-quantum cryptography, Hardware & software implementations. This track also emphasizes
                    emerging research areas in cyber security and privacy. It includes cyber security concepts,
                    threats in cyberspace, security standardization, security and privacy regulations and laws, cyber
                    hacking, digital forensics, Trust management, security and privacy in block chain technologies,
                    cyberspace protection and anti-malware, network traffic analysis, identity and access
                    management in cyber systems, cyber threat intelligence, cryptography trends, steganography,
                    security of cyber-physical systems and IoT, secure cloud and edge computing architectures,
                    security of web-based applications, and cyber harmony and cyber welfare. The track provides an
                    important viewpoint on an established, major research area; support or challenge long-held
                    beliefs in such an area with compelling evidence; or present a convincing, comprehensive new
                    taxonomy of such an area. The topics include, but are not limited to:

                    <ul className="list-disc pl-5">
                        <li>Security and privacy in mobile systems</li>
                        <li>Network performance analysis</li>
                        <li>Cyber risk and vulnerability assessment</li>
                        <li>Intrusion detection and prevention</li>
                        <li>Trust management</li>
                        <li>Security in IoT and edge computing</li>
                        <li>Steganography and cryptanalysis</li>
                    </ul>
                </>
            )
        },
        {
            name: "CLOUD COMPUTING, IOT AND EDGE TECHNOLOGIES",
            imageUrl: iot,
            link: "#cloudcomputing",
            text: (
                <>
                    The track has a vast expanse in the field Data Analytics, Distributed & Parallel Computing, High
                    Performance Computing, Quantum Computing, Cloud Quality Management & Service level
                    agreement, Cluster, Cloud, & Grid Computing, Mobile Computing and Edge Computing.
                    Complementing AI into the cloud paradigm promises a journey of unlocking business potential
                    and their operations with greater agility and efficiency. Cost savings and enhanced data
                    management are just some of the added bonuses that come with investing in cloud technology.
                    While the benefits are abundant, the obstacles in execution are as detrimental. Integration
                    challenges, data privacy and concerns around connectivity can be major setbacks to your
                    strategy. The topics include, but are not limited to:
                    <ul className="list-disc pl-5">
                        <li>Quantum computing</li>
                        <li>Cloud virtualization and IoT</li>
                        <li>Fog computing</li>
                        <li>Hybrid cloud infrastructure</li>
                        <li>Cloud security</li>
                        <li>Blockchain for IoT</li>
                        <li>Security in edge computing</li>
                    </ul>
                </>
            )
        },
        {
            name: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
            imageUrl: ai,
            link: "#aiml",
            text: (
                <>
                    Artificial Intelligence and Machine learning track deals with aspects of Signal Processing, Audio
                    and Speech Processing, Computer Vision, Natural Language Processing, Supervised and
                    unsupervised learning, Deep Learning, Data Mining, Generative Models, Reinforcement
                    Learning and Optimization algorithm. Artificial intelligence (AI) is the simulation of human
                    intelligence processes by machines, especially computer systems. These processes include
                    learning (the acquisition of information and rules for using the information), reasoning (using
                    rules to reach approximate or definite conclusions) and self-correction. Neuromorphic computing
                    mimicking the human brain is one such wave towards AI capabilities. The topics include, but are
                    not limited to:
                    <ul className="list-disc pl-5">
                        <li>Pattern recognition</li>
                        <li>Self-driving vehicles</li>
                        <li>Generative AI use-cases</li>
                        <li>Time series prediction</li>
                        <li>Deepfake technologies</li>
                        <li>Robotics and cognitive computing</li>
                        <li>High reliability and error tolerance in AI</li>
                    </ul>
                </>
            )
        },
        {
            name: "DIGITAL INNOVATION, TRANSFORMATION AND APPLICATIONS",
            imageUrl: healthcare,
            link: "#healthcare",
            text: (
                <>
                    The goal of accelerating medical innovation while enhancing the effectiveness of patient care
                    becomes a reality in Healthcare 4.0, the fourth healthcare revolution. Utilizing a new generation
                    of information technologies, including the Internet of things (loT), big data, cloud computing,
                    artificial intelligence and computer vision, smart healthcare is able to completely revolutionize
                    the current medical system making it more effective, convenient and individualized. Healthcare
                    professionals are progressively adopting new digital trends, such as wearable gadgets that allow
                    patients to supplement their health data and networked equipment that enable remote monitoring
                    and patient care. This track provides the opportunity to learn the recent research trends and future
                    scope of smart healthcare. The topics include, but are not limited to:
                    <ul className="list-disc pl-5">
                        <li>Electronic Health Records (EHR)</li>
                        <li>Telemedicine and Remote Patient Monitoring</li>
                        <li>Healthcare Data Privacy and Cybersecurity</li>
                        <li>Blockchain applications in healthcare</li>
                        <li>Precision medicine and genomics</li>
                        <li>AI-driven healthcare decision-making</li>
                        <li>Ethical considerations in AI for healthcare</li>
                    </ul>
                </>
            )
        }
    ];
    const images = [
        "/sliderimages/about/slide1.jpg",
        "/sliderimages/about/slide2.jpg",
        "/sliderimages/about/slide1.jpg",
        "/sliderimages/about/slide2.jpg",
    ];
    const im = [
        "/sliderimages/about/slide1.jpg",
        "/sliderimages/about/slide2.jpg",
        "/sliderimages/about/slide1.jpg",
        "/sliderimages/about/slide2.jpg",
        "/sliderimages/about/slide1.jpg",
        "/sliderimages/about/slide2.jpg",

    ];
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedCard, setSelectedCard] = useState(0);

    const handleCardHover = (index) => {
        setHoveredCard(index);
    };

    const handleCardLeave = () => {
        setHoveredCard(null);
    };
    const showData = (index) => {
        setSelectedCard(index); // Set the selected card to display its text
    };
    return (
        <>
            <section className="aboutconf flex flex-row mt-10 h-auto bg-primary10 p-5 mb-12">
                <div className="about w-[60%]">
                    <h1 className="font-bold text-4xl mb-4">About 1st IC2SDT 2024</h1>
                    <p className="text-justify overflow-scroll rounded-lg shadow-2xl h-[44vh] p-2">The year 2024 marks a pivotal moment in the realm of computer science and digital
                        technologies, as it witnesses groundbreaking advancements that are set to shape the future of our
                        interconnected world. At the forefront of these pioneering developments is the emergence of
                        quantum computing, which promises to revolutionize computation by harnessing the principles
                        of quantum mechanics. Quantum computers, with their ability to process vast amounts of data at
                        unprecedented speeds, are poised to solve complex problems in fields such as cryptography, drug
                        discovery, and climate modeling, paving the way for new frontiers in technology and science.
                        Additionally, artificial intelligence (AI) continues to evolve, pushing the boundaries of what
                        machines can achieve. In 2024, AI systems are expected to demonstrate a deeper understanding
                        of context, enabling more natural and sophisticated human-machine interactions. Ethical AI and
                        responsible AI deployment are also prominent themes, with increased focus on ensuring that AI
                        technologies are used ethically and with transparency. The Internet of Things (IoT) has matured
                        to a point where it seamlessly integrates with our daily lives. In 2024, IoT applications have
                        expanded into areas such as healthcare, agriculture, and smart cities, enhancing efficiency and
                        quality of life. Advancements in 5G and beyond are the backbone of this expansion, providing
                        the necessary connectivity to support a growing ecosystem of IoT devices. Cybersecurity
                        remains a paramount concern in this digital age, and 2024 sees significant strides in the
                        development of next-generation security solutions. Innovative approaches to protecting data and
                        systems include advanced encryption techniques, AI-driven threat detection, and decentralized
                        identity management systems. Lastly, the year 2024 would showcase progress in the field of
                        biotechnology and its intersection with computer science. Computational biology and
                        bioinformatics have become indispensable in genomics research and drug discovery, leading to
                        groundbreaking breakthroughs in personalized medicine and disease treatment.<br />These pioneering developments in computer science and digital technologies represent the
                        cutting edge of human innovation and will undoubtedly be a focal point for discussion and
                        exploration at the upcoming International Conference. As we navigate this era of rapid
                        technological transformation, collaboration and knowledge sharing among researchers, industry
                        leaders, and policymakers will be essential to ensure that these advancements benefit society as a
                        whole. </p>
                </div>
                <div className="images w-[40%] p-2 pl-20 flex items-center justify-center ">
                    {/* <Image src={nitdAcad} alt="" className="object-cover w-full" /> */}
                    <ImageSlider images={images} />
                </div>
            </section>
            <section className="research-stats flex flex-col mt-5 p-5  bg-primary10">
                <h1 className="text-center font-bold text-4xl mb-6">Research-Statistics</h1>
                <div className="flex flex-row">
                    <div  className="visual w-[40%] p-5">
                        <div className="data flex text-4xl flex-wrap gap-20 ">
                            <div className="flex flex-col w-[25%]">
                                <p ><Number n={100}/>+</p>
                                <p className="text-sm">Total Submitted Papers</p>
                            </div>
                            <div className="flex flex-col w-[25%]">
                                <p><Number n={200}/>+</p>
                                <p className="text-sm">Accepted Papers</p>
                            </div>
                            <div className="flex flex-col w-[25%]">
                                <p><Number n={300}/>+</p>
                                <p className="text-sm">Presented Papers</p>
                            </div>
                            <div className="flex flex-col w-[25%]">
                                <p><Number n={400}/>+</p>
                                <p className="text-sm">KeyNote Talks</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="text w-[60%] h-auto"></div>
                </div>
                

            </section>
            <section className="keynote flex flex-col mt-5 p-5 h-auto bg-primary10">
                <h1 className="text-center font-bold text-4xl mb-6">Keynote Speakers</h1>
                <div className="flex flex-row gap-10 justify-center">
                    <div className="card-s bg-white p-7">
                        <div className="s-logo">
                            <Image src={selva} alt={"Prof. S. Selvakumar"} />
                        </div>
                        <div className="text-s">
                            <div className="font-bold speakerTitle">{"Prof. S. Selvakumar"}</div>
                            <span className="speakerDescription text-desig">{"Professor"}</span><br></br>
                            <span className="speakerDescription text-xs">{"National Institute of Technology Tiruchirappalli"}</span>
                        </div>
                    </div>
                    <div className="card-s bg-white p-7">
                        <div className="s-logo">
                            <Image src={manindra} alt={"Prof. Manindra Agarwal"} />
                        </div>
                        <div className="text-s">
                            <div className="font-bold speakerTitle">{"Prof. Manindra Agarwal"}</div>
                            <span className="speakerDescription text-desig">{"Professor"}</span><br></br>
                            <span className="speakerDescription text-xs">{"IIT Kanpur, India"}</span>
                        </div>
                    </div>
                    <div className="card-s bg-white p-7">
                        <div className="s-logo">
                            <Image src={sharma} alt={"Prof Sharma Chakraborty"} />
                        </div>
                        <div className="text-s">
                            <div className="font-bold speakerTitle">{"Prof. Sharma Chakraborty"}</div>
                            <span className="speakerDescription text-desig">{"Professor"}</span><br></br>
                            <span className="speakerDescription text-xs">{"University of Texas, USA"}</span>
                        </div>
                    </div>
                    <div className="card-s bg-white p-7">
                        <div className="s-logo">
                            <Image src={moin} alt={"Prof. Moin Uddin"} />
                        </div>
                        <div className="text-s">
                            <div className="font-bold speakerTitle">{"Prof. Moin Uddin"}</div>
                            <span className="speakerDescription text-desig">{"Professor"}</span><br></br>
                            <span className="speakerDescription text-xs">{"Apeejay Stya University, Gurugram"}</span>
                        </div>
                    </div>
                    <div className="card-s bg-white p-7">
                        <div className="s-logo">
                            <Image src={manoj} alt={"Prof. Manoj Mishra"} />
                        </div>
                        <div className="text-s">
                            <div className="font-bold speakerTitle">{"Prof. Manoj Mishra"}</div>
                            <span className="speakerDescription text-desig">{"Professor"}</span><br></br>
                            <span className="speakerDescription text-xs">{"Indian Institute of Technology Roorkee"}</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tracks flex flex-col mt-5 h-auto p-2 bg-primary10">
                <h1 className="text-center font-bold text-4xl mb-6">Tracks</h1>
                <div className="container flex mx-auto  justify-left">
                    <div className="flex flex-wrap w-[40%] h-[30%] tracking-widest items-start justify-center">
                        {themes.map(function (theme, index) {
                            return (
                                <div
                                    className={`card cursor-pointer grid-container ${hoveredCard === index ? "hovered" : ""}`}
                                    onMouseEnter={() => handleCardHover(index)}
                                    onMouseLeave={handleCardLeave}
                                    onClick={() => showData(index)} // Set selected card on click
                                >
                                    <div className="card-inner bg-gradient-to-b from-[#c8bfe8] to-[#dce6fa] rounded-lg shadow-lg flex flex-col items-center justify-center text-center h-full">
                                        <div className="front flex flex-col items-center justify-center">
                                            <div className="front-content flex flex-col items-center justify-center w-full m-2">
                                                <img
                                                    src={theme.imageUrl.src}
                                                    alt={theme.name}
                                                    className="w-8 sm:w-20 ring-4 sm:ring-6 ring-blue-900 ring-offset-white bg-white ring-offset-2 sm:ring-offset-4 rounded-full aspect-square object-cover"
                                                />
                                                <p className="font-bold py-3 text-xs sm:text-xs text-blue-900">{theme.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            );
                        })}
                    </div>

                    {/* Display the text of the selected card */}
                    {selectedCard !== null && (
                        <div className="ml-10 p-5 bg-gray-200 rounded-lg shadow-2xl w-[60%]">
                            <h2 className="text-xl font-bold">{themes[selectedCard].name}</h2>
                            <p className="text-lg h-[70vh] overflow-scroll text-justify mt-4">{themes[selectedCard].text}</p>
                        </div>
                    )}
                </div>
            </section>
            <section className="inaugral flex flex-row h-auto p-5 mt-5 bg-primary10">

                <div className="about w-[60%] ">
                    <h1 className="text-center font-bold text-4xl mb-6">Inaugrual Day</h1>
                    <p className="text-justify p-4 h-[60vh] overflow-scroll rounded-lg shadow-2xl">
                        Inaugural ceremony of 1st International Conference on Pioneering Developments in Computer
                        Science and Digital Technologies-2024 was held at Main Auditorium, Admin Block, NIT Delhi
                        on 2nd August, 2024. This ground-breaking event was technically sponsored by IEEE while
                        financial sponsors include DST-SERB, DRDO, Khalsa College of Engineering & Technology
                        Amritsar, Edutech Pvt. Ltd, Itaynix Technologies and ICICI Bank. The conference kicked off at
                        10:00 am with a traditional lamp lighting ceremony and Mata Saraswathi Vandana.<br />
                        <b>Distinguished guests included:</b> <br />
                        <li> <b> Prof. K. K. Aggarwal</b>, President, South Asian University [<b>Chief Guest</b>] </li>
                        <li> <b> Prof. (Dr.) Ajay K Sharma</b>, Director, NIT Delhi [<b>Principal Chair & Patron</b>]</li>
                        <li> <b> Prof. (Dr.) Subrata Mukhopadhyay</b>, Chair, Standing Committee on Technical &
                            Professional Activities, IEEE Delhi section [<b>Guest of Honour</b>]</li>
                        <li> <b> Prof. Abdul Q. Ansari</b> Chair, IEEE Delhi section and keynote speaker [<b>Guest of
                            Honour</b>]</li>
                        <li> <b> Prof. G.S. Walia</b>, Scientist-F, Scientific Analysis Group (SAG), DRDO, Delhi [<b>Guest of
                            Honour</b>]</li>
                        <li> <b> Prof. Manju Bala</b>, Director, Khalsa College of Engg. and Technology, Amritsar [<b>Guest
                            of Honour</b>]</li>
                        <li> <b> Prof. Geeta Sikka</b>, Dean Academics, NIT Delhi [<b>Conference Chair</b>]</li>
                        <li> <b>Dr. Karan Verma</b>, Head, Dept of CSE [<b>Conference Secretary</b>]</li><br />
                        The ceremony began with inspiring speeches highlighting the significance of the conference and
                        the future of computer science and digital technologies. The dignitaries shared their perspectives.
                        The Chief guest and the Director along with other dignitaries released First International
                        conference newsletter. The session was concluded with the Registrar Prof. Jyoteesh Malhotra
                        expressing gratitude in the vote of thanks to the Chief guest and all other dignitaries of the
                        event. The participants enjoyed an engaging talk by Prof. Abdul Q Ansari, Professor, Jamia
                        Millia Islamia, New Delhi on Neutrosophic Logic. The keynote talk was truly exceptional,
                        offering thought-provoking perspectives, leaving a lasting impact and setting a high standard for
                        the rest of the conference.
                    </p>
                </div>
                <div className="images w-[40%] p-4 pt-12 flex items-start">
                    {/* <Image src={nitdAdmin} alt="" className="object-cover h-full" /> */}
                    <ImageSlider images={im} />
                </div>
            </section>
            <section className="day-1 flex flex-row h-auto p-5 mt-5 gap-6 bg-primary10">

                <div className="images w-[40%] p-4 flex items-center pt-10">
                    {/* <Image src={nitdAdmin} alt="" className="object-cover h-full" /> */}
                    <ImageSlider images={im} />
                </div>
                <div className="about w-[60%] ">
                    <h1 className="text-center font-bold text-4xl mb-6">Day-1 Highlights</h1>
                    <p className="text-justify p-1 rounded-lg shadow-2xl overflow-scroll h-[60vh]">Technical Sessions started after lunch regarding which the information is as follows:
                        <table>
                            <thead>
                                <tr>
                                    <th>Session No.</th>
                                    <th>Venue & Timing</th>
                                    <th>Track & Session Chair/ Co-Chair</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Session I</td>
                                    <td>Committee Room, 4th Floor, Administrative Building &<br />14:00 PM - 16:00 PM</td>
                                    <td>
                                        <strong>Artificial Intelligence and Machine Learning</strong><br />
                                        Session Chair I: Dr. Rafat Parveen, Jamia Millia Islamia, New Delhi<br />
                                        Session Chair II: Dr. Rajneesh Rani, NIT Jalandhar<br />
                                        Session Co-Chair: Dr. Gunjan, NIT Delhi (Coordinator)
                                    </td>
                                </tr>
                                <tr>
                                    <td>Session II</td>
                                    <td>Conference Room 1, Training & Placement Cell &<br />14:00 PM - 16:00 PM</td>
                                    <td>
                                        <strong>Cryptography, Cyber Security and Network Security</strong><br />
                                        Session Chair I: Dr. V S Pandey/Dr. Karan Verma, NIT Delhi<br />
                                        Session Chair II: Dr. Sachin Singh, NIT Delhi<br />
                                        Session Co-Chair: Dr. Sahil, NIT Delhi (Coordinator)
                                    </td>
                                </tr>
                                <tr>
                                    <td>Session III</td>
                                    <td>Conference Room 2, Training & Placement Cell &<br />14:00 PM - 16:00 PM</td>
                                    <td>
                                        <strong>Cloud Computing and IoT</strong><br />
                                        Session Chair I: Dr. Samayveer Singh, NIT Jalandhar<br />
                                        Session Chair II: Dr. Tirupathiraju Kanumuri, NIT Delhi<br />
                                        Session Co-Chair: Dr. Jaspinder Kaur, NIT Delhi (Coordinator)
                                    </td>
                                </tr>
                                <tr>
                                    <td>Session IV</td>
                                    <td>Conference Room, 5th Floor, Administrative Building &<br />14:00 PM - 16:00 PM</td>
                                    <td>
                                        <strong>Data Analytics and Mining</strong><br />
                                        Session Chair I: Prof. Ujjwal Kalla, NIT Delhi<br />
                                        Session Chair II: Prof. Maalti Puri, KCET, Amritsar<br />
                                        Session Co-Chair: Dr. Parnika Bhat, NIT Delhi (Coordinator)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </div>
            </section>
            <section className="day-2 flex flex-row h-auto p-5 mt-5 bg-primary10">

                
                <div className="about w-[60%] ">
                    <h1 className="text-center font-bold text-4xl mb-6">Day-2 Highlights</h1>
                    <p className="text-justify p-1 rounded-lg shadow-2xl overflow-scroll h-[60vh]">Day 2 of the conference kicked off with an inspiring keynote by Dr. Peng Jiang from Cleveland State University, Ohio, United States. His online address set the stage for a day of insightful discussions and innovative ideas. Morning technical sessions followed, with scholars' papers rigorously reviewed by our esteemed session chair committee members at various venues within the Admin Block of NIT Delhi.<br />
                        Information regarding technical sessions is as follows:
                        <table>
                            <thead>
                                <tr>
                                    <th>Session No.</th>
                                    <th>Venue & Timing</th>
                                    <th>Track & Session Chair/ Co-Chair</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Session V</td>
                                    <td>Committee Room, 4th Floor, Administrative Building &<br />11:00 AM - 13:00 PM</td>
                                    <td>
                                        <strong>Artificial Intelligence and Machine Learning</strong><br />
                                        Session Chair I: Dr. Shelly Sachdeva, NIT Delhi<br />
                                        Session Chair II: Dr. Ripin Kohli, KCET, Amritsar<br />
                                        Session Co-Chair: Dr. Vishal Gupta, NIT Delhi (Coordinator)
                                    </td>
                                </tr>
                                <tr>
                                    <td>Session VI</td>
                                    <td>Conference Room 1, Training & Placement Cell &<br />11:00 AM - 13:00 PM</td>
                                    <td>
                                        <strong>Cloud Computing and IoT</strong><br />
                                        Session Chair I: Prof. (Dr.) Tanvir Ahmad, JMI, Delhi<br />
                                        Session Chair II: Dr. Anurag Singh, NIT Delhi<br />
                                        Session Co-Chair: Dr. Sahil, NIT Delhi (Coordinator)
                                    </td>
                                </tr>
                                <tr>
                                    <td>Session VII</td>
                                    <td>Conference Room 2, Training & Placement Cell &<br />11:00 AM - 13:00 PM</td>
                                    <td>
                                        <strong>Cryptography, Cyber Security and Network Security</strong><br />
                                        Session Chair I: Dr. Prashant Kumar, NIT Delhi<br />
                                        Session Chair II: Dr. Mahesh K. Singh, NIT Delhi<br />
                                        Session Co-Chair: Dr. Arjun Rawat, NIT Delhi (Coordinator)
                                    </td>
                                </tr>
                                <tr>
                                    <td>Session VIII</td>
                                    <td>Conference Room, 5th Floor, Administrative Building &<br />11:00 AM - 13:00 PM</td>
                                    <td>
                                        <strong>Digital Innovation in Healthcare and its Application</strong><br />
                                        Session Chair I: Prof. O P Verma, DTU Delhi<br />
                                        Session Chair II: Dr. Manisha Bharti, NIT Delhi<br />
                                        Session Co-Chair: Dr. Gautam Kumar, NIT Delhi (Coordinator)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="text-justify">In the afternoon, Prof. Ghanshyam Singh from Malaviya National Institute of Technology Jaipur,
                            captivated students with his insightful session, enriching their knowledge and sparking new
                            ideas. The day concluded with evening technical sessions, where more scholars' presented papers
                            and reviewed by the session chairs, ensuring a high standard of academic excellence. The details
                            about evening sessions are as follows:-</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Session No.</th>
                                    <th>Venue & Timing</th>
                                    <th>Track & Session Chair/ Co-Chair</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Session IX</td>
                                    <td>Committee Room, 4th Floor, Administrative Building &<br />14:00 PM - 16:00 PM</td>
                                    <td>
                                        <strong>Artificial Intelligence and Machine Learning</strong><br />
                                        Session Chair I: Prof. (Dr.) Manoj Taleja, NIT Delhi<br />
                                        Session Chair II: Dr. Indu Saini, NIT Jalandhar<br />
                                        Session Co-Chair: Dr. Amandeep Kaur, NIT Delhi (Coordinator)
                                    </td>
                                </tr>
                                <tr>
                                    <td>Session X</td>
                                    <td>Conference Room 1, Training & Placement Cell &<br />14:00 PM - 16:00 PM</td>
                                    <td>
                                        <strong>Artificial Intelligence and Machine Learning</strong><br />
                                        Session Chair I: Prof. (Dr.) Geeta Sikka, NIT Delhi<br />
                                        Session Chair II: Dr. Atul Agnihotri, KCET, Amritsar<br />
                                        Session Co-Chair: Dr. Divya, NIT Delhi (Coordinator)
                                    </td>
                                </tr>
                                <tr>
                                    <td>Session XI</td>
                                    <td>Conference Room 2, Training & Placement Cell &<br />14:00 PM - 16:00 PM</td>
                                    <td>
                                        <strong>Artificial Intelligence and Machine Learning</strong><br />
                                        Session Chair I: Dr. Nonita Sharma, IGDTUW, New Delhi<br />
                                        Session Chair II: Dr. Rikamantra Basu, NIT Delhi<br />
                                        Session Coordinator: Ms. Parul, NIT Delhi
                                    </td>
                                </tr>
                                <tr>
                                    <td>Session XII</td>
                                    <td>Conference Room, 5th Floor, Administrative Building &<br />14:00 PM - 16:00 PM</td>
                                    <td>
                                        <strong>Artificial Intelligence and Machine Learning</strong><br />
                                        Session Chair I: Prof. (Dr.) Mamta Khosla, NIT Jalandhar<br />
                                        Session Chair II: Dr. Amit Mahajan, NIT Delhi<br />
                                        Session Co-Chair: Dr. Gunjan, NIT Delhi (Coordinator)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="text-justify">This conference continued to be a hub for ground-breaking discussions and networking
                            opportunities in computer science and digital technologies on its second day.</p></p>

                </div>
                <div className="images w-[40%] p-4 flex items-center pt-10">
                    {/* <Image src={nitdAdmin} alt="" className="object-cover h-full" /> */}
                    <ImageSlider images={im} />
                </div>
            </section>
            <section className="day-3 flex flex-row h-auto p-5 mt-5 bg-primary10">

                <div className="images w-[40%] p-4 flex items-center pt-10">
                    {/* <Image src={nitdAdmin} alt="" className="object-cover h-full" /> */}
                    <ImageSlider images={im} />
                </div>
                <div className="about w-[60%] ">
                    <h1 className="text-center font-bold text-4xl mb-6">Day-3 Highlights</h1>
                    <p className="text-justify p-1 rounded-lg shadow-2xl overflow-scroll h-[60vh]">Day 3 started with keynote talk by Dr. Amit Kohli from University of Canada West, Canada
                        whose insightful session elaborating complex ideas with practical applications was particularly
                        impressive, making it both informative and inspiring.<br />Technical sessions held in the Admin Block, where esteemed session chair committee members
                        rigorously reviewed research papers, fostering a productive academic environment. The details
                        are as follows:-
                    <table>
                        <thead>
                            <tr>
                                <th>Session No.</th>
                                <th>Venue & Timing</th>
                                <th>Track & Session Chair/ Co-Chair</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Session XIII</td>
                                <td>Committee Room, 4th Floor, Administrative Building &<br />10:30 AM - 12:30 PM</td>
                                <td>
                                    <strong>Artificial Intelligence and Machine Learning</strong><br />
                                    Session Chair I: Dr. Urvashi, NIT Jalandhar<br />
                                    Session Chair II: Dr. Shashvat, Amity University, Bangalore<br />
                                    Session Coordinator: Ms. Vandana Sharma, NIT Delhi
                                </td>
                            </tr>
                            <tr>
                                <td>Session XIV</td>
                                <td>Conference Room 1, Training & Placement Cell &<br />10:30 AM - 12:30 PM</td>
                                <td>
                                    <strong>Artificial Intelligence and Machine Learning</strong><br />
                                    Session Chair I: Prof. (Dr.) Jyoteesh Malhotra, NIT Delhi<br />
                                    Session Chair II: Dr. Aruna Malik, NIT Jalandhar<br />
                                    Session Co-Chair: Dr. Arshpreet Kaur, Amity University, Bangalore<br />
                                    Session Coordinator: Ms. Arshee Naz, NIT Delhi
                                </td>
                            </tr>
                        </tbody>
                    </table></p>


                </div>
            </section>
            <section className="valedictory flex flex-row h-auto p-5 mt-5 bg-primary10">
                <div className="about w-[60%] ">
                    <h1 className="text-center font-bold text-4xl mb-6">Valediction</h1>
                    <p className="text-justify rounded-lg shadow-2xl p-4">
                        <li>The Valedictory Session began with the traditional lamp lighting to Mata Saraswati.</li><br /> <li>Prof.(Dr.) Ajay K Sharma, Director of NIT Delhi, appreciated the efforts of the organizing team,
                            including Prof. Geeta Nagpal Sikka, Dr. Karan Verma, Dr Anurag Singh, Dr Shelly Sachdeva,
                            Dr Gautam Kumar, Dr Amandeep Kaur, Dr Sahil, Dr Gunjan , Dr Divya Punia, Dr Jaspinder
                            Kaur, Dr Arjun Rawat, Dr Parnika, and other key contributors, for their dedication to making the
                            conference a success.</li><br />Special thanks to our research scholars, M.Tech volunteers, and non-teaching staff for their
                        unwavering support.<br />Special appreciation to Prof. (Dr.) Manju Bala, Director of Khalsa College of Engineering &
                        Technology Amritsar, for sponsoring the event, and gratitude to all session chairs and co-chairs.</p>
                </div>
                <div className="images w-[40%] p-4">
                    <Image src={nitdAdmin} alt="" className="object-cover h-full" />
                </div>
            </section>
            <section className="BestPapers flex flex-row h-auto p-5 mt-5 bg-primary10">
                <div className="images w-[40%] p-4">
                    <Image src={nitdAdmin} alt="" className="object-cover h-full" />
                </div>
                <div className="about w-[60%] ">
                    <h1 className="text-center font-bold text-4xl mb-6">Best Papers Awards</h1>
                    <div className="text-justify rounded-lg shadow-2xl p-4">
                        <li><b>Best Paper in Cloud Computing and IoT</b>: Paper ID 559- (Title- Probabilistic Markow Modeling
                            With Trading Strategies For Efficient Stock Market Predictions)</li>
                        <li><b>In Cryptography and Network Security</b>: Paper ID 525 (Title-Simuhack : A Realistic Attack
                            Simulation Framework for Enhancing Cybersecurity in Autonomous)</li>
                        <li><b>In Data Analysis and Mining</b>: : Paper ID 254 (Title- Inventory Optimization of Multi-Echelon
                            Supply Chain under Market Uncertainties)</li>
                        <li><b>In AI &ML</b>: Paper ID 30 (Title-Deep learning model for the detection of Plant Disease with
                            Precision Agriculture)</li>
                    </div>
                </div>

            </section>
        </>
    )
}
