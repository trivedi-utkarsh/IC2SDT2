import "./speakers.css";
import SpeakerComponent from "./SpeakerComponent";
import { keynote } from "./keynoteSpeakersData";

export default function SponsorsSection() {
    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-blue-100 py-12">
            <h1 className="text-center text-4xl font-bold text-blue-800 mb-10 underline decoration-wavy decoration-green-500">
                Keynote Speakers
            </h1>
            <section className="speakers-grid">
                {Object.values(keynote).map((value, idx) => (
                    <SpeakerComponent key={idx} speaker={value} />
                ))}
            </section>
            <section className="spon pb-80">
                {/* speaker cards */}
            </section>

        </div>
    );
}
