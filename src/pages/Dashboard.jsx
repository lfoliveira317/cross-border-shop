export default function Dashboard() {
  const stats = [
    { label: 'Total Sales', value: 'PKR 2,450,000', change: '+12.5%', positive: true },
    { label: 'Pending Orders', value: '24', change: '+3', positive: true },
    { label: 'Low Stock Items', value: '8', change: '-2', positive: true },
    { label: 'Outstanding Balance', value: 'PKR 325,000', change: '-5.2%', positive: true },
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'Ahmed Khan', type: 'Preorder', amount: 'PKR 45,000', status: 'Pending' },
    { id: 'ORD-002', customer: 'Sara Ali', type: 'Instock', amount: 'PKR 28,500', status: 'Shipped' },
    { id: 'ORD-003', customer: 'Hassan Raza', type: 'Preorder', amount: 'PKR 62,000', status: 'Processing' },
    { id: 'ORD-004', customer: 'Fatima Malik', type: 'Instock', amount: 'PKR 18,750', status: 'Delivered' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</p>
            <p className={`text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-800">Recent Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <span className={`px-2 py-1 rounded text-xs ${
                      order.type === 'Preorder' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {order.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{order.amount}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
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
