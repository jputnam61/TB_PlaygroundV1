import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Product {
  name: string;
  quantity: number;
  color: string;
}

interface ProductListProps {
  products: Product[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function ProductList({ products, searchTerm, onSearchChange }: ProductListProps) {
  return (
    <Card className="border-2 border-purple-500/20">
      <CardHeader className="border-b border-purple-500/20 bg-purple-500/5">
        <CardTitle className="text-purple-500">Product List Page</CardTitle>
        <CardDescription>View and search product inventory</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            data-testid="product-search-input"
          />
          <div className="border rounded-lg divide-y">
            {products.length === 0 ? (
              <div className="p-4 text-center text-muted-foreground">No products found</div>
            ) : (
              products.map((product, index) => (
                <div
                  key={index}
                  className="p-4 flex justify-between items-center"
                  data-testid={`product-item-${index}`}
                >
                  <div>
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-sm text-muted-foreground">Quantity: {product.quantity}</p>
                  </div>
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: product.color }}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}