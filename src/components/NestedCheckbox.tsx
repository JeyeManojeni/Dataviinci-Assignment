
import React from 'react';
import { Check, Minus } from 'lucide-react';
import { CheckboxState } from '../types/checkbox';

interface NestedCheckboxProps {
  data: CheckboxState;
  onSelectAll: () => void;
  onToggleCategory: (categoryKey: string) => void;
  onToggleItem: (categoryKey: string, itemId: string) => void;
}

const NestedCheckbox: React.FC<NestedCheckboxProps> = ({
  data,
  onSelectAll,
  onToggleCategory,
  onToggleItem,
}) => {
  const CheckboxIcon = ({ checked, indeterminate }: { checked: boolean; indeterminate?: boolean }) => {
    if (indeterminate) {
      return (
        <div className="w-4 h-4 bg-blue-500 border-2 border-blue-500 rounded flex items-center justify-center">
          <Minus className="w-3 h-3 text-white" />
        </div>
      );
    }
    
    return (
      <div className={`w-4 h-4 border-2 rounded flex items-center justify-center transition-all ${
        checked 
          ? 'bg-blue-500 border-blue-500' 
          : 'border-gray-300 hover:border-blue-400'
      }`}>
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Select All */}
      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors">
        <button
          onClick={onSelectAll}
          className="flex items-center space-x-3 flex-1 text-left"
        >
          <CheckboxIcon 
            checked={data.selectAll.checked} 
            indeterminate={data.selectAll.indeterminate}
          />
          <span className="font-semibold text-gray-900 text-lg">Select All</span>
        </button>
      </div>

      {/* Categories */}
      <div className="space-y-3 ml-4">
        {Object.entries(data.categories).map(([categoryKey, category]) => (
          <div key={categoryKey} className="space-y-2">
            {/* Category Header */}
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <button
                onClick={() => onToggleCategory(categoryKey)}
                className="flex items-center space-x-3 flex-1 text-left"
              >
                <CheckboxIcon 
                  checked={category.checked} 
                  indeterminate={category.indeterminate}
                />
                <span className="font-medium text-gray-800 capitalize">{categoryKey}</span>
                <span className="text-sm text-gray-500">
                  ({category.items.filter(item => item.checked).length}/{category.items.length})
                </span>
              </button>
            </div>

            {/* Category Items */}
            <div className="ml-6 space-y-2">
              {category.items.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center space-x-3 p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <button
                    onClick={() => onToggleItem(categoryKey, item.id)}
                    className="flex items-center space-x-3 flex-1 text-left"
                  >
                    <CheckboxIcon checked={item.checked} />
                    <span className="text-gray-700">{item.name}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedCheckbox;