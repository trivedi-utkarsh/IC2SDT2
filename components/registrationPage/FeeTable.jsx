import indian_flag from 'assets/indian.png';
import Image from 'next/image';
import globe_flag from 'assets/globe_flag.png';
import { Info } from 'lucide-react'; // Importing an info icon

export default function FeeTable() {
  return (
    <div className="space-y-16 pb-24">
      {/* Indian Delegates */}
      <div className="container mx-auto px-4 sm:px-6 py-10 bg-white shadow-xl rounded-2xl border border-gray-200">
        <div className="flex items-center space-x-4 mb-8">
          <h2 className="text-3xl font-extrabold text-blue-700">Registration Fee for Indian Delegates</h2>
          <Image src={indian_flag} height={30} width={45} alt="Indian flag" />
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-base text-left text-gray-700 border border-gray-300 rounded-xl overflow-hidden shadow-md">
            <thead className="bg-blue-100 text-gray-900">
              <tr>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4 text-center">IEEE Members</th>
                <th className="px-6 py-4 text-center">Non-IEEE Members</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: 'Student (UG/PG/Researcher)', ieee: '₹ 8,000', nonieee: '₹ 9,600' },
                { category: 'Academicians / Industry Professionals', ieee: '₹ 10,000', nonieee: '₹ 12,000' },
                { category: 'Attendees', ieee: '₹ 5,000', nonieee: '₹ 6,000' }
              ].map((row, index) => (
                <tr key={index} className={`hover:bg-blue-50 transition ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                  <td className="px-6 py-4 font-semibold">{row.category}</td>
                  <td className="px-6 py-4 text-center text-blue-700 font-bold">{row.ieee}</td>
                  <td className="px-6 py-4 text-center text-blue-700 font-bold">{row.nonieee}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex items-center text-sm italic text-gray-600">
            <Info className="w-4 h-4 mr-2 text-blue-500" />
            Excluding GST and will be paid directly to the registrant.
          </div>
        </div>
      </div>

      {/* International Delegates */}
      <div className="container mx-auto px-4 sm:px-6 py-10 bg-white shadow-xl rounded-2xl border border-gray-200">
        <div className="flex items-center space-x-4 mb-8">
          <h2 className="text-3xl font-extrabold text-green-700">Registration Fee for International Delegates</h2>
          <Image src={globe_flag} height={30} width={45} alt="Globe flag" />
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-base text-left text-gray-700 border border-gray-300 rounded-xl overflow-hidden shadow-md">
            <thead className="bg-green-100 text-gray-900">
              <tr>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4 text-center">IEEE Members</th>
                <th className="px-6 py-4 text-center">Non-IEEE Members</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: 'Student (UG/PG/Researcher)', ieee: '$350', nonieee: '$420' },
                { category: 'Academicians / Industry Professionals', ieee: '$450', nonieee: '$540' },
                { category: 'Attendees', ieee: '$250', nonieee: '$300' }
              ].map((row, index) => (
                <tr key={index} className={`hover:bg-green-50 transition ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                  <td className="px-6 py-4 font-semibold">{row.category}</td>
                  <td className="px-6 py-4 text-center text-green-700 font-bold">{row.ieee}</td>
                  <td className="px-6 py-4 text-center text-green-700 font-bold">{row.nonieee}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex items-center text-sm italic text-gray-600">
            <Info className="w-4 h-4 mr-2 text-green-500" />
            Excluding taxes and will be paid directly to the registrant.
          </div>
        </div>
      </div>
    </div>
  );
}
