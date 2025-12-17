export default function Payments() {
  const payments = [
    { 
      id: 'PAY-001',
      date: '2024-12-10',
      customer: 'Ahmed Khan',
      orderId: 'ORD-001',
      type: 'Deposit',
      amount: 'PKR 20,000',
      method: 'Bank Transfer',
      reference: 'TXN-20241210-001',
      status: 'Confirmed'
    },
    { 
      id: 'PAY-002',
      date: '2024-12-12',
      customer: 'Sara Ali',
      orderId: 'ORD-002',
      type: 'Full Payment',
      amount: 'PKR 28,500',
      method: 'Cash',
      reference: 'CASH-001',
      status: 'Confirmed'
    },
    { 
      id: 'PAY-003',
      date: '2024-12-14',
      customer: 'Hassan Raza',
      orderId: 'ORD-003',
      type: 'Deposit',
      amount: 'PKR 30,000',
      method: 'JazzCash',
      reference: 'JC-20241214-789',
      status: 'Confirmed'
    },
    { 
      id: 'PAY-004',
      date: '2024-12-15',
      customer: 'Hassan Raza',
      orderId: 'ORD-003',
      type: 'Balance',
      amount: 'PKR 32,000',
      method: 'Bank Transfer',
      reference: 'TXN-20241215-002',
      status: 'Pending'
    },
    { 
      id: 'PAY-005',
      date: '2024-12-08',
      customer: 'Fatima Malik',
      orderId: 'ORD-004',
      type: 'Full Payment',
      amount: 'PKR 18,750',
      method: 'Easypaisa',
      reference: 'EP-20241208-456',
      status: 'Confirmed'
    },
  ];

  const summary = [
    { label: 'Total Received', value: 'PKR 97,250', color: 'text-green-600' },
    { label: 'Pending Payments', value: 'PKR 32,000', color: 'text-orange-600' },
    { label: 'Outstanding Balance', value: 'PKR 325,000', color: 'text-red-600' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Payments</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          + Record Payment
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {summary.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500 mb-1">{item.label}</p>
            <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{payment.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{payment.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{payment.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{payment.orderId}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      payment.type === 'Full Payment' ? 'bg-green-100 text-green-800' :
                      payment.type === 'Deposit' ? 'bg-blue-100 text-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {payment.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 font-medium">{payment.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{payment.method}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{payment.reference}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      payment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {payment.status}
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
