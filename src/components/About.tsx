import React from 'react';
import { Leaf, Users, Award, Truck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About GreenBasket</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing you the freshest vegetables straight from local farms. 
            Our commitment to quality and sustainability makes us your trusted partner for healthy living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Leaf,
              title: "100% Organic",
              description: "All our vegetables are certified organic and pesticide-free"
            },
            {
              icon: Users,
              title: "Local Farmers",
              description: "Supporting local communities and sustainable farming practices"
            },
            {
              icon: Award,
              title: "Premium Quality",
              description: "Hand-picked produce that meets our highest quality standards"
            },
            {
              icon: Truck,
              title: "Fast Delivery",
              description: "Fresh delivery within 24 hours of harvest"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <feature.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2020, GreenBasket started as a small initiative to connect urban consumers 
                with local farmers. We believe that everyone deserves access to fresh, healthy vegetables 
                without compromise on quality or freshness.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we work with over 50 local farms across the region, ensuring that every vegetable 
                in your basket is harvested at peak ripeness and delivered with care. Our commitment to 
                sustainability extends beyond organic farming to eco-friendly packaging and carbon-neutral delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">10,000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">50+</div>
                  <div className="text-gray-600">Partner Farms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">100%</div>
                  <div className="text-gray-600">Organic Certified</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1453795/pexels-photo-1453795.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh vegetables from our partner farms"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;