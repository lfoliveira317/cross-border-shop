import { Card, Table, Button } from 'react-bootstrap';

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
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h2 className="mb-0">Customers</h2>
        <Button variant="primary">+ Add Customer</Button>
      </div>

      <Card>
        <Card.Body className="p-0">
          <div className="table-responsive">
            <Table hover className="mb-0">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th className="d-none d-md-table-cell">Email</th>
                  <th className="d-none d-lg-table-cell">Phone</th>
                  <th>Orders</th>
                  <th>Balance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="fw-medium">{customer.name}</td>
                    <td className="d-none d-md-table-cell">{customer.email}</td>
                    <td className="d-none d-lg-table-cell">{customer.phone}</td>
                    <td>{customer.orders}</td>
                    <td>
                      <span className={customer.balance === 'PKR 0' ? 'text-success' : 'text-warning fw-medium'}>
                        {customer.balance}
                      </span>
                    </td>
                    <td>
                      <Button variant="link" size="sm" className="p-0 me-2">View</Button>
                      <Button variant="link" size="sm" className="p-0 text-secondary">Edit</Button>
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
