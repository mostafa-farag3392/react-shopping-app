import React from 'react';
import { Users, Award, Truck, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About ShopHub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are passionate about providing the best shopping experience with quality products and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Customer First
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We prioritize our customers' needs and satisfaction above everything else.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Quality Products
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We carefully curate our product selection to ensure the highest quality.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Quick and reliable shipping to get your products to you as soon as possible.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Secure Shopping
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your security and privacy are our top priorities.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            ShopHub was founded with a simple mission: to make online shopping easy, enjoyable, and secure. 
            We believe that everyone deserves access to quality products at fair prices.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Today, we continue to grow and evolve, always keeping our customers at the heart of everything we do. 
            We're committed to providing an exceptional shopping experience that keeps you coming back.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
