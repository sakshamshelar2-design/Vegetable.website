import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1200")'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Fresh Vegetables
          <span className="block text-emerald-400">Delivered Daily</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
          Farm-fresh produce straight to your doorstep. Quality guaranteed, always fresh.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Shop Now
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;