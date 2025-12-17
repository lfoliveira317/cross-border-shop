export default function Customers() {
  const customers = [
    { id: 1, name: 'Ahmed Khan', email: 'ahmed@example.com', phone: '+92 300 1234567', balance: 'PKR 15,000', orders: 12 },
    { id: 2, name: 'Sara Ali', email: 'sara@example.com', phone: '+92 321 7654321', balance: 'PKR 0', orders: 8 },
    { id: 3, name: 'Hassan Raza', email: 'hassan@example.com', phone: '+92 333 9876543', balance: 'PKR 28,500', orders: 15 },
    { id: 4, name: 'Fatima Malik', email: 'fatima@example.com', phone: '+92 345 5551234', balance: 'PKR 5,200', orders: 6 },
    { id: 5, name: 'Ali Zafar', email: 'ali@example.com', phone: '+92 300 8887777', balance: 'PKR 0', orders: 20 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Customers</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          + Add Customer
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{customer.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{customer.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{customer.phone}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{customer.orders}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <span className={customer.balance === 'PKR 0' ? 'text-green-600' : 'text-orange-600 font-medium'}>
                      {customer.balance}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                    <button className="text-gray-600 hover:text-gray-800">Edit</button>
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
