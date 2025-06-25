// components/PosterPopup.js
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function PosterPopup({ imageUrl }) {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        // prevent scroll when popup is open
        if (showPopup) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [showPopup]);

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-[90vw] max-h-[90vh] w-full">
                <button
                    className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-red-600 hover:text-white transition"
                    onClick={() => setShowPopup(false)}
                >
                    <X size={24} />
                </button>
                <Image
                    src={imageUrl}
                    alt="Poster"
                    layout="responsive"
                    width={800}
                    height={1000}
                    className="rounded max-h-[90vh] object-contain w-full"
                />
            </div>
        </div>
    );
}
