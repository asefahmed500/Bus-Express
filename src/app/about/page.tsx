import React from 'react';

export const metadata = {
  title: 'About Us - Bus Express',
  description: 'Learn more about Bus Express, your reliable bus travel companion.',
};

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4 text-center">
          About Bus Express
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Bus Express</span>, your reliable partner for hassle-free bus travel. 
          We are dedicated to making your journeys smoother, faster, and more convenient by providing an 
          easy-to-use platform for booking tickets, managing schedules, and tracking buses in real-time.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our mission is to connect people to their destinations safely and efficiently. With a robust network of buses
          across cities, we ensure that travelers have access to the most affordable and comfortable travel options.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Why Choose Bus Express?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Easy Booking:</strong> Quickly find and book tickets with a user-friendly interface.
          </li>
          <li>
            <strong>Real-Time Tracking:</strong> Stay updated with live bus tracking and schedule updates.
          </li>
          <li>
            <strong>Affordable Options:</strong> Choose from a variety of affordable travel options to suit your budget.
          </li>
          <li>
            <strong>24/7 Support:</strong> Our customer service team is here to help at any time.
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Our Vision
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At Bus Express, we envision a world where bus travel is seamless and stress-free. Whether it&apos;s daily commuting or 
          long-distance travel, we strive to provide a platform that saves you time and effort, while ensuring you reach your destination safely.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Have questions or need support? Visit our <a href="/contact" className="text-indigo-600 underline">Contact Us</a> page.
          We&apos;re here to help make your travel experience better!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
