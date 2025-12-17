export default function Shipments() {
  const shipments = [
    { 
      id: 'SHIP-001', 
      traveler: 'Ali Hassan', 
      route: 'Dubai → Karachi',
      totalWeight: '25.5 kg',
      freightCost: 'PKR 38,250',
      costPerKg: 'PKR 1,500/kg',
      items: 12,
      departure: '2024-12-18',
      arrival: '2024-12-19',
      status: 'In Transit'
    },
    { 
      id: 'SHIP-002', 
      traveler: 'Sara Ahmed', 
      route: 'London → Karachi',
      totalWeight: '18.2 kg',
      freightCost: 'PKR 45,500',
      costPerKg: 'PKR 2,500/kg',
      items: 8,
      departure: '2024-12-15',
      arrival: '2024-12-16',
      status: 'Delivered'
    },
    { 
      id: 'SHIP-003', 
      traveler: 'Hassan Malik', 
      route: 'New York → Karachi',
      totalWeight: '32.0 kg',
      freightCost: 'PKR 64,000',
      costPerKg: 'PKR 2,000/kg',
      items: 15,
      departure: '2024-12-20',
      arrival: '2024-12-21',
      status: 'Scheduled'
    },
    { 
      id: 'SHIP-004', 
      traveler: 'Fatima Khan', 
      route: 'Dubai → Karachi',
      totalWeight: '15.8 kg',
      freightCost: 'PKR 23,700',
      costPerKg: 'PKR 1,500/kg',
      items: 6,
      departure: '2024-12-12',
      arrival: '2024-12-13',
      status: 'Delivered'
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Shipments</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          + New Shipment
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Shipment ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Traveler</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Weight</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost/KG</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Freight</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Departure</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Arrival</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {shipments.map((shipment) => (
                <tr key={shipment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{shipment.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{shipment.traveler}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{shipment.route}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 font-medium">{shipment.totalWeight}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{shipment.costPerKg}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 font-medium">{shipment.freightCost}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{shipment.items}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{shipment.departure}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{shipment.arrival}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {shipment.status}
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
