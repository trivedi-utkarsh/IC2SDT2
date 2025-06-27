'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [count, setCount] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ months: 0, days: 0, hours: 0 });

  useEffect(() => {
    // Fetch visitor count
    fetch('/api/visitor')
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error(err));

    // Countdown logic
    const target = new Date('2025-12-04T00:00:00');

    const updateCountdown = () => {
      const now = new Date();
      if (now >= target) {
        setTimeLeft({ months: 0, days: 0, hours: 0 });
        return;
      }

      const yearDiff = target.getFullYear() - now.getFullYear();
      const monthDiff = target.getMonth() - now.getMonth();
      let months = yearDiff * 12 + monthDiff;

      let temp = new Date(now);
      temp.setMonth(temp.getMonth() + months);

      if (temp > target) {
        months--;
        temp.setMonth(temp.getMonth() - 1);
      }

      const remainingMs = target - temp;
      const days = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      setTimeLeft({
        months: Math.max(0, months),
        days: Math.max(0, days),
        hours: Math.max(0, hours),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

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
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        {/* Address */}
        <div className="flex space-x-4">
          <div className="text-gray-400">
            <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Address</h3>
            <p>National Institute of Technology Delhi</p>
            <p>Plot No. FA7, Zone P1, GT Karnal Rd</p>
            <p>Delhi - 110036</p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex space-x-4 mr-20">
          <div className="text-gray-400">
            <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z" />
            </svg>
          </div>
          <div className="flex flex-col ml-6">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <p><a href="mailto:amandeepk@nitdelhi.ac.in" className="text-blue-500">Dr. Amandeep</a></p>
            <p><a href="mailto:gunjan.rehani@nitdelhi.ac.in" className="text-blue-500">Dr. Gunjan</a></p>
            <p><a href="mailto:gautam@nitdelhi.ac.in" className="text-blue-500">Dr. Gautam</a></p>
            <p><a href="mailto:sahil.neelam@nitdelhi.ac.in" className="text-blue-500">Dr. Sahil</a></p>
          </div>
        </div>

        {/* Social + Visitor Count + Countdown */}
        <div>
          <h3 className="text-2xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            {/* Instagram */}
            <a href="https://www.instagram.com/nitdofficial/" target="_blank" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48">
                <path d="M16.5 5C10.159 5 5 10.159 5 16.5V31.5C5 37.841 10.159 43 16.5 43H31.5C37.841 43 43 37.841 43 31.5V16.5C43 10.159 37.841 5 31.5 5H16.5ZM34 12C35.105 12 36 12.895 36 14C36 15.104 35.105 16 34 16C32.895 16 32 15.104 32 14C32 12.895 32.895 12 34 12ZM24 14C29.514 14 34 18.486 34 24C34 29.514 29.514 34 24 34C18.486 34 14 29.514 14 24C14 18.486 18.486 14 24 14ZM24 17A7 7 0 1 0 24 31A7 7 0 1 0 24 17Z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/NitdelhiOffial/" target="_blank" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 50 50">
                <path d="M25 3C12.85 3 3 12.85 3 25c0 11.03 8.125 20.137 18.712 21.728V30.831h-5.443v-5.783h5.443v-3.848c0-6.371 3.104-9.168 8.399-9.168 2.536 0 3.877.188 4.512.274v5.048h-3.612c-2.248 0-3.033 2.131-3.033 4.533v3.161h6.588l-.894 5.783h-5.694v15.944C38.716 45.318 47 36.137 47 25 47 12.85 37.15 3 25 3z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="https://x.com/Nitdofficial" target="_blank" className="text-gray-400 hover:text-white">
              <svg className="w-11 h-11" fill="currentColor" viewBox="0 0 50 50">
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
              </svg>
            </a>
          </div>

        </div>

        <div className="mt-6">
          <p className="text-gray-600-revert text-lg font-semibold mb-2 tracking-wide">Visitors</p>
          {renderVisitorDigits()}
        </div>
      </div>
    </footer>
  );
}
