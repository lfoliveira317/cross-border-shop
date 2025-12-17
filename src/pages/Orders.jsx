import { Card, Table, Button, Badge } from 'react-bootstrap';

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
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h2 className="mb-0">Orders</h2>
        <Button variant="primary">+ New Order</Button>
      </div>

      <Card>
        <Card.Body className="p-0">
          <div className="table-responsive">
            <Table hover className="mb-0">
              <thead className="table-light">
                <tr>
                  <th>Order ID</th>
                  <th className="d-none d-md-table-cell">Date</th>
                  <th>Customer</th>
                  <th className="d-none d-lg-table-cell">Type</th>
                  <th className="d-none d-xl-table-cell">Items</th>
                  <th>Total</th>
                  <th className="d-none d-lg-table-cell">Deposit</th>
                  <th className="d-none d-lg-table-cell">Balance</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="fw-medium">{order.id}</td>
                    <td className="d-none d-md-table-cell">{order.date}</td>
                    <td>{order.customer}</td>
                    <td className="d-none d-lg-table-cell">
                      <Badge bg={order.type === 'Preorder' ? 'primary' : 'success'}>
                        {order.type}
                      </Badge>
                    </td>
                    <td className="d-none d-xl-table-cell">{order.items}</td>
                    <td className="fw-medium">{order.total}</td>
                    <td className="d-none d-lg-table-cell">{order.deposit}</td>
                    <td className="d-none d-lg-table-cell">
                      <span className={order.balance === 'PKR 0' ? 'text-success' : 'text-warning fw-medium'}>
                        {order.balance}
                      </span>
                    </td>
                    <td>
                      <Badge bg={
                        order.status === 'Delivered' ? 'success' :
                        order.status === 'Shipped' ? 'info' :
                        order.status === 'Processing' ? 'warning' :
                        'secondary'
                      }>
                        {order.status}
                      </Badge>
                    </td>
                    <td>
                      <Button variant="link" size="sm" className="p-0">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
