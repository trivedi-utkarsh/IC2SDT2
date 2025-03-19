import indian_flag from 'assets/indian.png';
import Image from 'next/image';

export default function FeeTable() {
  return (
    <div className="space-y-12">
      <div className="container mx-auto px-4 sm:px-6 py-8 bg-white shadow-lg rounded-2xl border border-gray-200">
        <div className="flex items-center space-x-3 mb-6">
          <h2 className="text-3xl font-extrabold text-blue-700">Registration Fee for Indian Delegates</h2>
          <Image src={indian_flag} height={24} width={40} alt="Indian flag" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-base text-left text-gray-700 border border-gray-300 rounded-xl overflow-hidden">
            <thead className="bg-blue-100 text-gray-900">
              <tr>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4 text-center">IEEE Members</th>
                <th className="px-6 py-4 text-center">Non-IEEE Members</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: 'Student (UG/PG/PhD)', ieee: '₹ 9,000', nonieee: '₹ 10,000' },
                { category: 'Academicians / Industry Professionals', ieee: '₹ 10,000', nonieee: '₹ 11,000' },
                { category: 'Attendees', ieee: '₹ 5,000', nonieee: '₹ 6,000' }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="px-6 py-4 font-semibold">{row.category}</td>
                  <td className="px-6 py-4 text-center text-blue-700 font-bold">{row.ieee}</td>
                  <td className="px-6 py-4 text-center text-blue-700 font-bold">{row.nonieee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h2 className="text-3xl font-extrabold text-green-700 mb-6">Registration Fee for International Delegates</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-base text-left text-gray-700 border border-gray-300 rounded-xl overflow-hidden">
            <thead className="bg-green-100 text-gray-900">
              <tr>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4 text-center">IEEE Members</th>
                <th className="px-6 py-4 text-center">Non-IEEE Members</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: 'Student (UG/PG/PhD)', ieee: '$350', nonieee: '$450' },
                { category: 'Academicians / Industry Professionals', ieee: '$450', nonieee: '$550' },
                { category: 'Attendees', ieee: '$250', nonieee: '$350' }
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="px-6 py-4 font-semibold">{row.category}</td>
                  <td className="px-6 py-4 text-center text-green-700 font-bold">{row.ieee}</td>
                  <td className="px-6 py-4 text-center text-green-700 font-bold">{row.nonieee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );}
