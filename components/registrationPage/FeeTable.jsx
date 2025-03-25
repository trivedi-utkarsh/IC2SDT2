import indian_flag from 'assets/indian.png';
import Image from 'next/image';
import globe_flag from 'assets/globe_flag.png';

export default function FeeTable() {
  return (
    <div className="space-y-16 pb-24"> {/* pb-24 adds bottom space */}
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
                { category: 'Student (UG/PG/Researcher)', ieee: '₹ 9,440/-  (₹ 8000 + 18% GST)', nonieee: '₹ 11,328/-  (₹ 9600 + 18% GST)' },
                { category: 'Academicians / Industry Professionals', ieee: '₹ 11,800/- (₹ 10,000 + 18% GST)', nonieee: '₹ 14,160/- (₹ 12,000 + 18% GST)' },
                { category: 'Attendees', ieee: '₹ 5,900/- (₹ 5,000 + 18% GST)', nonieee: '₹ 7,080/- (₹ 6,000 + 18% GST)' }
              ].map((row, index) => (
                <tr key={index} className={`hover:bg-blue-50 transition ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                  <td className="px-6 py-4 font-semibold">{row.category}</td>
                  <td className="px-6 py-4 text-center text-blue-700 font-bold">{row.ieee}</td>
                  <td className="px-6 py-4 text-center text-blue-700 font-bold">{row.nonieee}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
                { category: 'Student (UG/PG/Researcher)', ieee: '$ 413/- ($ 350 + 18% GST)', nonieee: '$ 496/- ($ 420 + 18% GST)' },
                { category: 'Academicians / Industry Professionals', ieee: '$ 531/- ($ 450 + 18% GST)', nonieee: '$ 638/- ($ 540 + 18% GST)' },
                { category: 'Attendees', ieee: '$ 295/- ($ 250 + 18% GST)', nonieee: '$ 354/- ($ 300 + 18% GST)' }
              ].map((row, index) => (
                <tr key={index} className={`hover:bg-green-50 transition ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
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
  );
}
