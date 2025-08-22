import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types/Product';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  totalPrice: number;
  onClearCart: () => void;
}

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  paymentMethod: string;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  totalPrice,
  onClearCart,
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit-card'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    alert(`Order placed successfully! Total: $${totalPrice.toFixed(2)}\nThank you for your order, ${formData.name}!`);
    onClearCart();
    setShowCheckout(false);
    onClose();
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zipCode: '',
      paymentMethod: 'credit-card'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Shopping Cart ({cartItems.length})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {!showCheckout ? (
              <>
                {/* Cart Items */}
                <div className="p-6">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-600">Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {cartItems.map(item => (
                        <div key={item.product.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                            <p className="text-sm text-gray-600">${item.product.price} {item.product.unit}</p>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-1 hover:bg-red-100 text-red-600 rounded-full transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                  <div className="p-6 border-t bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-2xl font-bold text-emerald-600">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => setShowCheckout(true)}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* Checkout Form */
              <form onSubmit={handleCheckout} className="p-6 space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Checkout</h3>
                  <button
                    type="button"
                    onClick={() => setShowCheckout(false)}
                    className="text-emerald-600 hover:text-emerald-700"
                  >
                    Back to Cart
                  </button>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Personal Information</h4>
                  
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                {/* Shipping Address */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Shipping Address</h4>
                  
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      required
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Payment Method</h4>
                  
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="credit-card">Credit Card</option>
                    <option value="debit-card">Debit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="cash-on-delivery">Cash on Delivery</option>
                  </select>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Order Summary</h4>
                  <div className="space-y-1">
                    {cartItems.map(item => (
                      <div key={item.product.id} className="flex justify-between text-sm">
                        <span>{item.product.name} × {item.quantity}</span>
                        <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                      <span>Total:</span>
                      <span className="text-emerald-600">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                >
                  Place Order
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;