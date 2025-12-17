import { Card, Table, Button, Badge } from 'react-bootstrap';

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
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h2 className="mb-0">Inventory</h2>
        <Button variant="primary">+ Add Item</Button>
      </div>

      <Card>
        <Card.Body className="p-0">
          <div className="table-responsive">
            <Table hover className="mb-0">
              <thead className="table-light">
                <tr>
                  <th>SKU</th>
                  <th>Product</th>
                  <th className="d-none d-xl-table-cell">Lot</th>
                  <th>Qty</th>
                  <th className="d-none d-lg-table-cell">Purchase Cost</th>
                  <th className="d-none d-xl-table-cell">Freight/Unit</th>
                  <th className="d-none d-md-table-cell">Landed Cost</th>
                  <th className="d-none d-lg-table-cell">Selling Price</th>
                  <th className="d-none d-lg-table-cell">Margin</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id}>
                    <td className="fw-medium">{item.sku}</td>
                    <td>{item.product}</td>
                    <td className="d-none d-xl-table-cell">{item.lot}</td>
                    <td className="fw-medium">{item.quantity}</td>
                    <td className="d-none d-lg-table-cell">{item.purchaseCost}</td>
                    <td className="d-none d-xl-table-cell">{item.freightPerUnit}</td>
                    <td className="d-none d-md-table-cell fw-medium">{item.landedCost}</td>
                    <td className="d-none d-lg-table-cell">{item.sellingPrice}</td>
                    <td className="d-none d-lg-table-cell text-success fw-medium">{item.margin}</td>
                    <td>
                      <Badge bg={
                        item.status === 'In Stock' ? 'success' :
                        item.status === 'Low Stock' ? 'warning' :
                        'danger'
                      }>
                        {item.status}
                      </Badge>
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
