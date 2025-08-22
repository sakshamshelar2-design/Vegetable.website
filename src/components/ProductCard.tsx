import React from 'react';
import { Plus, ShoppingCart } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-medium">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-emerald-600">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              {product.unit}
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add to Cart</span>
            <ShoppingCart className="h-4 w-4 sm:hidden" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;