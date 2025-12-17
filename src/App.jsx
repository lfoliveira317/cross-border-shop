import { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Orders from './pages/Orders';
import Purchases from './pages/Purchases';
import Shipments from './pages/Shipments';
import Inventory from './pages/Inventory';
import Payments from './pages/Payments';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showSidebar, setShowSidebar] = useState(false);

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

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setShowSidebar(false);
  };

  const SidebarContent = () => (
    <>
      <div className="p-4 border-bottom">
        <h4 className="mb-0">Cross-Border Shop</h4>
        <small className="text-muted">Internal Management</small>
      </div>
      <Nav className="flex-column p-3">
        {navigation.map((item) => (
          <Nav.Link
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`nav-item-custom d-flex align-items-center gap-3 px-3 py-2 mb-2 rounded ${
              currentPage === item.id ? 'active' : 'text-dark'
            }`}
          >
            <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
            <span className="fw-medium">{item.name}</span>
          </Nav.Link>
        ))}
      </Nav>
    </>
  );

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Desktop Sidebar */}
      <div className="sidebar d-none d-lg-block" style={{ width: '280px' }}>
        <SidebarContent />
      </div>

      {/* Mobile Offcanvas Sidebar */}
      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <SidebarContent />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main Content */}
      <div className="flex-grow-1" style={{ backgroundColor: '#f8f9fa' }}>
        {/* Mobile Header */}
        <Navbar bg="white" className="d-lg-none border-bottom">
          <Container fluid>
            <Navbar.Brand>Cross-Border Shop</Navbar.Brand>
            <button 
              className="btn btn-outline-secondary"
              onClick={() => setShowSidebar(true)}
            >
              ☰
            </button>
          </Container>
        </Navbar>

        {/* Page Content */}
        <Container fluid className="p-3 p-md-4">
          {renderPage()}
        </Container>
      </div>
    </div>
  );
}

export default App;
