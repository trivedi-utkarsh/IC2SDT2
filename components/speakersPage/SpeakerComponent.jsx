import Image from "next/image";

export default function SpeakerComponent({ speaker }) {
  return (
    <div className="card-s">
      <div className="s-logo">
        <Image src={speaker.image} alt={speaker.title} width={120} height={120} />
      </div>
      <div className="text-s">
        <div className="font-bold speakerTitle text-xl text-blue-700">{speaker.title}</div>
        <span className="speakerDescription text-green-600 font-semibold">{speaker.designation}</span>
        <br />
        <span className="speakerDescription text-gray-700 text-sm">{speaker.description}</span>
      </div>
    </div>
  );
}
