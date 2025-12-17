export default function Orders() {
  const orders = [
    { 
      id: 'ORD-001', 
      customer: 'Ahmed Khan', 
      type: 'Preorder', 
      items: 3, 
      total: 'PKR 45,000',
      deposit: 'PKR 20,000',
      balance: 'PKR 25,000',
      status: 'Pending',
      date: '2024-12-10'
    },
    { 
      id: 'ORD-002', 
      customer: 'Sara Ali', 
      type: 'Instock', 
      items: 2, 
      total: 'PKR 28,500',
      deposit: 'PKR 28,500',
      balance: 'PKR 0',
      status: 'Shipped',
      date: '2024-12-12'
    },
    { 
      id: 'ORD-003', 
      customer: 'Hassan Raza', 
      type: 'Preorder', 
      items: 5, 
      total: 'PKR 62,000',
      deposit: 'PKR 30,000',
      balance: 'PKR 32,000',
      status: 'Processing',
      date: '2024-12-14'
    },
    { 
      id: 'ORD-004', 
      customer: 'Fatima Malik', 
      type: 'Instock', 
      items: 1, 
      total: 'PKR 18,750',
      deposit: 'PKR 18,750',
      balance: 'PKR 0',
      status: 'Delivered',
      date: '2024-12-08'
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Orders</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          + New Order
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deposit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{order.customer}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      order.type === 'Preorder' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {order.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{order.items}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 font-medium">{order.total}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{order.deposit}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={order.balance === 'PKR 0' ? 'text-green-600' : 'text-orange-600 font-medium'}>
                      {order.balance}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
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
