import { Card, Table, Button, Badge } from 'react-bootstrap';

export default function Purchases() {
  const purchases = [
    { 
      id: 'PUR-001', 
      supplier: 'Amazon US', 
      currency: 'USD',
      amount: '$450.00',
      fxRate: '278.50',
      pkrAmount: 'PKR 125,325',
      discount: '$45.00',
      items: 5,
      date: '2024-12-05',
      status: 'Received'
    },
    { 
      id: 'PUR-002', 
      supplier: 'Dubai Supplier', 
      currency: 'AED',
      amount: 'AED 1,200',
      fxRate: '75.80',
      pkrAmount: 'PKR 90,960',
      discount: 'AED 0',
      items: 3,
      date: '2024-12-08',
      status: 'In Transit'
    },
    { 
      id: 'PUR-003', 
      supplier: 'UK Wholesaler', 
      currency: 'GBP',
      amount: '£320.00',
      fxRate: '352.00',
      pkrAmount: 'PKR 112,640',
      discount: '£32.00',
      items: 4,
      date: '2024-12-10',
      status: 'Ordered'
    },
    { 
      id: 'PUR-004', 
      supplier: 'Local Vendor', 
      currency: 'PKR',
      amount: 'PKR 85,000',
      fxRate: '1.00',
      pkrAmount: 'PKR 85,000',
      discount: 'PKR 5,000',
      items: 8,
      date: '2024-12-12',
      status: 'Received'
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h2 className="mb-0">Purchases</h2>
        <Button variant="primary">+ New Purchase</Button>
      </div>

      <Card>
        <Card.Body className="p-0">
          <div className="table-responsive">
            <Table hover className="mb-0">
              <thead className="table-light">
                <tr>
                  <th>Purchase ID</th>
                  <th className="d-none d-md-table-cell">Date</th>
                  <th>Supplier</th>
                  <th>Currency</th>
                  <th className="d-none d-lg-table-cell">Amount</th>
                  <th className="d-none d-xl-table-cell">FX Rate</th>
                  <th>PKR Amount</th>
                  <th className="d-none d-lg-table-cell">Discount</th>
                  <th className="d-none d-xl-table-cell">Items</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((purchase) => (
                  <tr key={purchase.id}>
                    <td className="fw-medium">{purchase.id}</td>
                    <td className="d-none d-md-table-cell">{purchase.date}</td>
                    <td>{purchase.supplier}</td>
                    <td>
                      <Badge bg={
                        purchase.currency === 'USD' ? 'success' :
                        purchase.currency === 'AED' ? 'info' :
                        purchase.currency === 'GBP' ? 'primary' :
                        'secondary'
                      }>
                        {purchase.currency}
                      </Badge>
                    </td>
                    <td className="d-none d-lg-table-cell">{purchase.amount}</td>
                    <td className="d-none d-xl-table-cell">{purchase.fxRate}</td>
                    <td className="fw-medium">{purchase.pkrAmount}</td>
                    <td className="d-none d-lg-table-cell">{purchase.discount}</td>
                    <td className="d-none d-xl-table-cell">{purchase.items}</td>
                    <td>
                      <Badge bg={
                        purchase.status === 'Received' ? 'success' :
                        purchase.status === 'In Transit' ? 'info' :
                        'warning'
                      }>
                        {purchase.status}
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
