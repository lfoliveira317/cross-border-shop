import { Card, Row, Col, Table, Badge } from 'react-bootstrap';

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
      <h2 className="mb-4">Dashboard</h2>
      
      {/* Stats Grid */}
      <Row className="g-3 g-md-4 mb-4">
        {stats.map((stat, index) => (
          <Col key={index} xs={12} sm={6} lg={3}>
            <Card>
              <Card.Body>
                <p className="text-muted mb-1 small">{stat.label}</p>
                <h3 className="mb-2">{stat.value}</h3>
                <p className={`mb-0 small ${stat.positive ? 'text-success' : 'text-danger'}`}>
                  {stat.change} from last month
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Recent Orders */}
      <Card>
        <Card.Header>
          <h5 className="mb-0">Recent Orders</h5>
        </Card.Header>
        <Card.Body className="p-0">
          <div className="table-responsive">
            <Table hover className="mb-0">
              <thead className="table-light">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="fw-medium">{order.id}</td>
                    <td>{order.customer}</td>
                    <td>
                      <Badge bg={order.type === 'Preorder' ? 'primary' : 'success'}>
                        {order.type}
                      </Badge>
                    </td>
                    <td>{order.amount}</td>
                    <td>
                      <Badge bg={
                        order.status === 'Delivered' ? 'success' :
                        order.status === 'Shipped' ? 'info' :
                        'warning'
                      }>
                        {order.status}
                      </Badge>
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
