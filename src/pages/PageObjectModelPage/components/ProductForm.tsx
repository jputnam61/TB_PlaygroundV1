import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

interface ProductFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
  isLoading: boolean;
}

export function ProductForm({ onSubmit, isLoading }: ProductFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <Card className="border-2 border-green-500/20">
      <CardHeader className="border-b border-green-500/20 bg-green-500/5">
        <CardTitle className="text-green-500">Product Management Page</CardTitle>
        <CardDescription>Add and manage products in the system</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4" data-testid="product-form">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" name="name" required data-testid="product-name-input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              required
              min="1"
              data-testid="product-quantity-input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="color">Color</Label>
            <Select name="color" required>
              <SelectTrigger data-testid="product-color-select">
                <SelectValue placeholder="Select color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" disabled={isLoading} data-testid="submit-product-button">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Add Product
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}