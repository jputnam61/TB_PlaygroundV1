import { useState } from 'react';
import { LiveDemo } from './PageObjectModelPage/LiveDemo';

export function PageObjectModelPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const form = e.target;
    const formData = new FormData(form);
    const newProduct = {
      name: formData.get('name'),
      quantity: Number(formData.get('quantity')),
      color: formData.get('color'),
    };
    setProducts([...products, newProduct]);
    form.reset();
    setIsLoading(false);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Live Demo</h2>
        <p className="text-muted-foreground">
          Interactive example of Page Object Model implementation
        </p>
        <LiveDemo
          isLoading={isLoading}
          products={filteredProducts}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSubmit={handleSubmit}
        />
      </section>
    </div>
  );
}