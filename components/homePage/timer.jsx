'use client';

import { useEffect, useState } from 'react';

export default function CountdownTimer() {
    const [count, setCount] = useState(null);
    const [time, setTime] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        // Visitor count
        fetch('/api/visitor')
            .then(res => res.json())
            .then(data => setCount(data.count))
            .catch(console.error);

        // Countdown logic
        const targetDate = new Date('2025-12-04T00:00:00');

        const updateCountdown = () => {
            const now = new Date();
            const diff = targetDate - now;

            if (diff <= 0) {
                setTime({ days: '00', hours: '00', minutes: '00', seconds: '00' });
                return;
            }

            const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
            const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
            const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
            const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

            setTime({ days, hours, minutes, seconds });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    const renderTimeBox = (value, label) => (
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg px-10 py-10 w-100 border">
            <div className="text-3xl md:text-6xl font-extrabold text-gray-900">{value}</div>
            <div className="text-xs text-gray-500 uppercase mt-1">{label}</div>
        </div>
    );

    const renderVisitorDigits = () => {
        const padded = String(count ?? 0).padStart(5, '0');
        return (
            <div className="flex gap-1 mt-3 justify-center">
                {padded.split('').map((digit, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-800 text-white font-mono text-xl md:text-2xl w-8 md:w-10 h-10 md:h-12 flex items-center justify-center rounded-md shadow-inner"
                    >
                        {digit}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="w-full bg-gradient-to-b from-[#f8f9fa] to-white py-12 px-4 text-center mb-5 mt-5">
            {/* <h2 className="text-sm tracking-widest font-semibold text-gray-500 uppercase mb-2">
                Department of CSE — NIT Delhi
            </h2> */}
            <h1 className="text-3xl font-extrabold text-blue-700 mb-10">
                Conference Countdown
            </h1>
            {/* <p className="text-gray-600 mx-auto mb-10">
                Join us for a technical workshop starting on <span className="font-semibold">4th December 2025</span>.
                Time left to go:
            </p> */}

            {/* Timer Grid */}
            <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-10">
                {renderTimeBox(time.days, 'Days')}
                {renderTimeBox(time.hours, 'Hours')}
                {renderTimeBox(time.minutes, 'Minutes')}
                {renderTimeBox(time.seconds, 'Seconds')}
            </div>
        </div>
    );
}
