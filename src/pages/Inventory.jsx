export default function Inventory() {
  const inventory = [
    { 
      id: 'INV-001',
      sku: 'SHOE-001',
      product: 'Nike Air Max',
      lot: 'LOT-2024-12-001',
      quantity: 12,
      purchaseCost: 'PKR 8,500',
      freightPerUnit: 'PKR 1,200',
      landedCost: 'PKR 9,700',
      sellingPrice: 'PKR 14,500',
      margin: '49.5%',
      status: 'In Stock'
    },
    { 
      id: 'INV-002',
      sku: 'WATCH-001',
      product: 'Apple Watch Series 9',
      lot: 'LOT-2024-12-002',
      quantity: 3,
      purchaseCost: 'PKR 95,000',
      freightPerUnit: 'PKR 2,500',
      landedCost: 'PKR 97,500',
      sellingPrice: 'PKR 125,000',
      margin: '28.2%',
      status: 'Low Stock'
    },
    { 
      id: 'INV-003',
      sku: 'BAG-001',
      product: 'Coach Leather Bag',
      lot: 'LOT-2024-12-003',
      quantity: 8,
      purchaseCost: 'PKR 42,000',
      freightPerUnit: 'PKR 1,800',
      landedCost: 'PKR 43,800',
      sellingPrice: 'PKR 58,000',
      margin: '32.4%',
      status: 'In Stock'
    },
    { 
      id: 'INV-004',
      sku: 'PHONE-001',
      product: 'iPhone 15 Pro',
      lot: 'LOT-2024-12-004',
      quantity: 0,
      purchaseCost: 'PKR 285,000',
      freightPerUnit: 'PKR 3,000',
      landedCost: 'PKR 288,000',
      sellingPrice: 'PKR 350,000',
      margin: '21.5%',
      status: 'Out of Stock'
    },
    { 
      id: 'INV-005',
      sku: 'PERFUME-001',
      product: 'Dior Sauvage 100ml',
      lot: 'LOT-2024-12-005',
      quantity: 15,
      purchaseCost: 'PKR 18,500',
      freightPerUnit: 'PKR 800',
      landedCost: 'PKR 19,300',
      sellingPrice: 'PKR 26,500',
      margin: '37.3%',
      status: 'In Stock'
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Inventory</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          + Add Item
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SKU</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lot</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Purchase Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Freight/Unit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Landed Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Selling Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Margin</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.sku}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.product}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.lot}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 font-medium">{item.quantity}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.purchaseCost}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.freightPerUnit}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 font-medium">{item.landedCost}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.sellingPrice}</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-medium">{item.margin}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                      item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
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
