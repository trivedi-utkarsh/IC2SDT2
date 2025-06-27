import { dates } from "./data";

export default function ImportantDates() {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto px-4 sm:px-8 py-10">
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
  );
}
