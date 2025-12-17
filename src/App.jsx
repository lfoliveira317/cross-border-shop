import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Orders from './pages/Orders';
import Purchases from './pages/Purchases';
import Shipments from './pages/Shipments';
import Inventory from './pages/Inventory';
import Payments from './pages/Payments';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'customers', name: 'Customers', icon: '👥' },
    { id: 'orders', name: 'Orders', icon: '📦' },
    { id: 'purchases', name: 'Purchases', icon: '🛒' },
    { id: 'shipments', name: 'Shipments', icon: '✈️' },
    { id: 'inventory', name: 'Inventory', icon: '📋' },
    { id: 'payments', name: 'Payments', icon: '💰' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'customers': return <Customers />;
      case 'orders': return <Orders />;
      case 'purchases': return <Purchases />;
      case 'shipments': return <Shipments />;
      case 'inventory': return <Inventory />;
      case 'payments': return <Payments />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Cross-Border Shop</h1>
          <p className="text-sm text-gray-500 mt-1">Internal Management</p>
        </div>
        <nav className="p-4">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-lg text-left transition-colors ${
                currentPage === item.id
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
