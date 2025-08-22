import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/Product';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  searchTerm: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart, searchTerm }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="shop" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fresh Vegetables & Produce
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our wide selection of farm-fresh vegetables, carefully selected for quality and taste.
            All our produce is sourced from local farms and delivered fresh daily.
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No products found matching "{searchTerm}". Try a different search term.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;