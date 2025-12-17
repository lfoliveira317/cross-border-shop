import { Card, Table, Button, Badge } from 'react-bootstrap';

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
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h2 className="mb-0">Shipments</h2>
        <Button variant="primary">+ New Shipment</Button>
      </div>

      <Card>
        <Card.Body className="p-0">
          <div className="table-responsive">
            <Table hover className="mb-0">
              <thead className="table-light">
                <tr>
                  <th>Shipment ID</th>
                  <th>Traveler</th>
                  <th className="d-none d-lg-table-cell">Route</th>
                  <th className="d-none d-xl-table-cell">Weight</th>
                  <th className="d-none d-lg-table-cell">Cost/KG</th>
                  <th>Total Freight</th>
                  <th className="d-none d-xl-table-cell">Items</th>
                  <th className="d-none d-md-table-cell">Departure</th>
                  <th className="d-none d-md-table-cell">Arrival</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {shipments.map((shipment) => (
                  <tr key={shipment.id}>
                    <td className="fw-medium">{shipment.id}</td>
                    <td>{shipment.traveler}</td>
                    <td className="d-none d-lg-table-cell">{shipment.route}</td>
                    <td className="d-none d-xl-table-cell fw-medium">{shipment.totalWeight}</td>
                    <td className="d-none d-lg-table-cell">{shipment.costPerKg}</td>
                    <td className="fw-medium">{shipment.freightCost}</td>
                    <td className="d-none d-xl-table-cell">{shipment.items}</td>
                    <td className="d-none d-md-table-cell">{shipment.departure}</td>
                    <td className="d-none d-md-table-cell">{shipment.arrival}</td>
                    <td>
                      <Badge bg={
                        shipment.status === 'Delivered' ? 'success' :
                        shipment.status === 'In Transit' ? 'info' :
                        'warning'
                      }>
                        {shipment.status}
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
