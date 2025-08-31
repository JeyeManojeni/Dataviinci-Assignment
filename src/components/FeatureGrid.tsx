import React from 'react';
import { CheckSquare, Smartphone, Monitor, Layers } from 'lucide-react';

const FeatureGrid = () => {
  const features = [
    {
      icon: CheckSquare,
      title: 'Nested Checkbox Logic',
      description: 'Advanced state management with parent-child relationships, indeterminate states, and bidirectional propagation.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive layout that adapts seamlessly from mobile to desktop with optimized touch interactions.',
    },
    {
      icon: Monitor,
      title: 'Desktop Optimization',
      description: 'Enhanced desktop experience with hover states, larger click targets, and multi-column layouts.',
    },
    {
      icon: Layers,
      title: 'Component Architecture',
      description: 'Clean, modular components with proper separation of concerns and reusable design patterns.',
    },
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Features</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Showcasing modern React development practices with TypeScript, custom hooks, and responsive design.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <feature.icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;