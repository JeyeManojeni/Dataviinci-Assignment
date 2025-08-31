

import React from 'react';
import NestedCheckbox from './NestedCheckbox';
import { useCheckboxState } from '../hooks/useCheckboxState';
import { checkboxData } from '../data/checkboxData';

const NestedCheckboxDemo = () => {
  const { state, toggleSelectAll, toggleCategory, toggleItem } = useCheckboxState(checkboxData);

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Food Categories Selection</h3>
        <p className="text-gray-600 mb-6">
          This component demonstrates proper nested checkbox behavior with Select All, category, and individual item selection.
        </p>
        
        <NestedCheckbox
          data={state}
          onSelectAll={toggleSelectAll}
          onToggleCategory={toggleCategory}
          onToggleItem={toggleItem}
        />
      </div>

      {/* Selected Items Display */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold text-blue-900 mb-3">Selected Items:</h4>
        <div className="flex flex-wrap gap-2">
          {Object.entries(state.categories).map(([categoryKey, category]) => 
            category.items
              .filter(item => item.checked)
              .map(item => (
                <span
                  key={`${categoryKey}-${item.id}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {item.name}
                </span>
              ))
          )}
        </div>
        {Object.values(state.categories).every(category => 
          category.items.every(item => !item.checked)
        ) && (
          <p className="text-blue-600 italic">No items selected</p>
        )}
      </div>
    </div>
  );
};

export default NestedCheckboxDemo;