import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useCart } from './hooks/useCart';
import { products } from './data/products';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart,
    toggleCart,
    setIsCartOpen
  } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemCount={getTotalItems()}
        onCartToggle={toggleCart}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <main>
        <Hero />
        <ProductGrid
          products={products}
          onAddToCart={addToCart}
          searchTerm={searchTerm}
        />
        <About />
        <Contact />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default App;