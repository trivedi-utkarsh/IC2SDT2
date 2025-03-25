import { dates } from "./data";
import { rules } from "./data";

export default function Submissions() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 py-10">
        <ImportantDates />

        {/* <div className="mt-16">
          <h2 className="text-4xl font-extrabold mb-6 text-left text-blue-700">
            Camera-Ready Submission Instructions
          </h2>
          <div className="bg-white shadow-md rounded-2xl p-6 text-left">
            <p className="text-red-600 font-bold text-xl">Announcing Soon</p>
          </div>
        </div> */}

        <div className="mt-16">
          <h2 className="text-4xl font-extrabold mb-8 text-left text-blue-700">
            Submission Rules
          </h2>
          <section className="bg-white shadow-md rounded-2xl p-8 space-y-6 text-gray-800 text-lg">
            <ul className="space-y-4 list-none">
              {rules.map((rule, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">➤</span>
                  <span>{rule}</span>
                </li>
              ))}
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">➤</span>
                <span>
                  Submission should strictly follow the recommended IEEE conference template, which can be found
                  <a
                    className="font-semibold text-blue-600 hover:underline ml-1"
                    href="https://www.ieee.org/conferences/publishing/templates.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>.
                </span>
              </li>
              {/* <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">➤</span>
                <span>
                  Authors should submit their original unpublished work in PDF format
                  <a
                    className="font-semibold text-blue-600 hover:underline ml-1"
                    href="https://cmt3.research.microsoft.com/IC2SDT2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>.
                </span>
              </li> */}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

function ImportantDates() {
  return (
    <div className="container mx-auto px-4 sm:px-8 py-10 bg-gray-50 rounded-2xl shadow-md">
      <h3 className="text-3xl font-bold text-left text-blue-700 mb-8">
        Important Dates
      </h3>
      <ol className="sm:flex items-start space-y-8 sm:space-y-0 sm:space-x-10">
        {dates.map((date, idx) => (
          <li key={idx} className="relative">
            <div className="flex items-center mb-4">
              <div className="z-10 w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-md">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="hidden sm:block w-full h-0.5 bg-gray-300 ml-2"></div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {date.category}
              </h4>
              <div className="flex gap-2 flex-wrap">
                {date.previousDate && (
                  <time className="text-sm text-red-500 line-through font-medium">
                    {date.previousDate}
                  </time>
                )}
                <time className="text-sm text-green-600 font-bold">
                  {date.date}
                </time>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );}
