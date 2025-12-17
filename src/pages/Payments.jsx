import { Card, Table, Button, Badge, Row, Col } from 'react-bootstrap';

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
    { label: 'Total Received', value: 'PKR 97,250', color: 'text-success' },
    { label: 'Pending Payments', value: 'PKR 32,000', color: 'text-warning' },
    { label: 'Outstanding Balance', value: 'PKR 325,000', color: 'text-danger' },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h2 className="mb-0">Payments</h2>
        <Button variant="primary">+ Record Payment</Button>
      </div>

      {/* Summary Cards */}
      <Row className="g-3 g-md-4 mb-4">
        {summary.map((item, index) => (
          <Col key={index} xs={12} md={4}>
            <Card>
              <Card.Body>
                <p className="text-muted mb-1 small">{item.label}</p>
                <h3 className={`mb-0 ${item.color}`}>{item.value}</h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Payments Table */}
      <Card>
        <Card.Body className="p-0">
          <div className="table-responsive">
            <Table hover className="mb-0">
              <thead className="table-light">
                <tr>
                  <th>Payment ID</th>
                  <th className="d-none d-md-table-cell">Date</th>
                  <th>Customer</th>
                  <th className="d-none d-lg-table-cell">Order ID</th>
                  <th className="d-none d-xl-table-cell">Type</th>
                  <th>Amount</th>
                  <th className="d-none d-lg-table-cell">Method</th>
                  <th className="d-none d-xl-table-cell">Reference</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="fw-medium">{payment.id}</td>
                    <td className="d-none d-md-table-cell">{payment.date}</td>
                    <td>{payment.customer}</td>
                    <td className="d-none d-lg-table-cell">{payment.orderId}</td>
                    <td className="d-none d-xl-table-cell">
                      <Badge bg={
                        payment.type === 'Full Payment' ? 'success' :
                        payment.type === 'Deposit' ? 'info' :
                        'warning'
                      }>
                        {payment.type}
                      </Badge>
                    </td>
                    <td className="fw-medium">{payment.amount}</td>
                    <td className="d-none d-lg-table-cell">{payment.method}</td>
                    <td className="d-none d-xl-table-cell">{payment.reference}</td>
                    <td>
                      <Badge bg={payment.status === 'Confirmed' ? 'success' : 'warning'}>
                        {payment.status}
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
