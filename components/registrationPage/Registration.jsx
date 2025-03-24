import { rules } from "./data";
import { dates } from "./data";
import indian_flag from 'assets/indian.png';
import regis_from from 'assets/form.png';
import Image from "next/image";

import Fees from "./Fees";
import FeeTable from "./FeeTable";

export default function Submissions() {
  return (
    <div className="container mx-auto px-4 sm:px-8 py-10">
      <h2 className="text-3xl font-extrabold mb-6 text-left text-blue-800">
        Registration Procedure
      </h2>

      <div className="bg-gray-50 shadow-md rounded-xl p-6 space-y-5 text-gray-800 text-base leading-relaxed">
        <ol className="list-decimal list-inside space-y-5">

          <li>
            <span className="font-bold text-gray-900">Pay Conference Registration Fee on the following link :</span>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>
                <span className="text-gray-700">For Indian Delegates:</span> <a className="underline" href=''>Payment link</a> <span className="text-red-600 font-bold">(Announcing Soon)</span>
              </li>
              <li>
                <span className="text-gray-700">For International Delegates:</span> <a className="underline" href=''>Payment link</a> <span className="text-red-600 font-bold">(Announcing Soon)</span>
              </li>
            </ul>
            <p className="mt-2 text-gray-700">* Ensure to save the screenshot of the payment confirmation for uploading during registration form.</p>
          </li>

          <li>
            <span className="font-bold text-gray-900">Fill out the Registration Form:</span> <a className="underline text-blue-700" href='https://forms.gle/DUrRC6WeeALWoLoR7'>Conference Registration link</a> <span className="text-red-600 font-bold"></span>
          </li>

          <li>
            <span className="font-bold text-gray-900">For Accommodation requirement : </span>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>
                <span className="text-gray-700">Pay Accommodation Fee : <a className="underline" href=''>Payment link</a></span> <span className="text-red-600 font-bold">(Announcing Soon)</span>
              </li>
              <li>
                <span className="text-gray-700">Fill out Accommodation Request Form : <a className="underline text-blue-700" href='https://forms.gle/hakynnsv5C5GY2Fq7'>Form link</a></span> <span className="text-red-600 font-bold"></span>
              </li>
            </ul>
          </li>

          {/* <li>
            <span className="font-bold text-gray-900">Accommodation Details:</span>
            <p className="mt-2 text-gray-700">
              On-campus accommodation will be provided on a <span className="font-semibold text-blue-700">first-come-first-serve (FCFS)</span> basis at a nominal rate of <span className="font-semibold text-blue-700">Rs. 500 per day per person (shared)</span>. Accommodation registration closes on <span className="font-semibold text-blue-700">15th December 2025</span>.
            </p>
          </li> */}

        </ol>
        <br></br>
        <span className="font-bold text-gray-900">Important details for Accommodation:</span>
        <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
          <li>
            <span className="text-gray-700">On-campus accommodation will be provided on a <span className="font-semibold text-blue-700">first-come-first-serve (FCFS)</span> basis at a nominal rate of <span className="font-semibold text-blue-700">Rs. 500 per day per person (shared)</span>.</span>
          </li>
          <li>
            <span className="text-gray-700">Accommodation registration closes on <span className="font-semibold text-blue-700">15th November 2025</span>.</span>
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <FeeTable />
      </div>

      <br />
      <br />
    </div>
  );
}
