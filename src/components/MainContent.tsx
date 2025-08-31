import React from 'react';
import NestedCheckboxDemo from './NestedCheckboxDemo';
import FeatureGrid from './FeatureGrid';
import StatsSection from './StatsSection';

const MainContent = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Advanced UI Components
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Demonstrating responsive design and complex state management with nested checkbox functionality.
          </p>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Nested Checkbox Demo */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Nested Checkbox Component</h2>
          <NestedCheckboxDemo />
        </section>

        {/* Feature Grid */}
        <FeatureGrid />
      </div>
    </main>
  );
};

export default MainContent;