export default function Purchases() {
  const purchases = [
    { 
      id: 'PUR-001', 
      supplier: 'Amazon US', 
      currency: 'USD',
      amount: '$450.00',
      fxRate: '278.50',
      pkrAmount: 'PKR 125,325',
      discount: '$45.00',
      items: 5,
      date: '2024-12-05',
      status: 'Received'
    },
    { 
      id: 'PUR-002', 
      supplier: 'Dubai Supplier', 
      currency: 'AED',
      amount: 'AED 1,200',
      fxRate: '75.80',
      pkrAmount: 'PKR 90,960',
      discount: 'AED 0',
      items: 3,
      date: '2024-12-08',
      status: 'In Transit'
    },
    { 
      id: 'PUR-003', 
      supplier: 'UK Wholesaler', 
      currency: 'GBP',
      amount: '£320.00',
      fxRate: '352.00',
      pkrAmount: 'PKR 112,640',
      discount: '£32.00',
      items: 4,
      date: '2024-12-10',
      status: 'Ordered'
    },
    { 
      id: 'PUR-004', 
      supplier: 'Local Vendor', 
      currency: 'PKR',
      amount: 'PKR 85,000',
      fxRate: '1.00',
      pkrAmount: 'PKR 85,000',
      discount: 'PKR 5,000',
      items: 8,
      date: '2024-12-12',
      status: 'Received'
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Purchases</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          + New Purchase
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Purchase ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Supplier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Currency</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">FX Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">PKR Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Discount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {purchases.map((purchase) => (
                <tr key={purchase.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{purchase.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{purchase.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{purchase.supplier}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      purchase.currency === 'USD' ? 'bg-green-100 text-green-800' :
                      purchase.currency === 'AED' ? 'bg-blue-100 text-blue-800' :
                      purchase.currency === 'GBP' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {purchase.currency}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{purchase.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{purchase.fxRate}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 font-medium">{purchase.pkrAmount}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{purchase.discount}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{purchase.items}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      purchase.status === 'Received' ? 'bg-green-100 text-green-800' :
                      purchase.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {purchase.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
