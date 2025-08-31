import { useState, useCallback } from 'react';
import { CheckboxData, CheckboxState, CategoryState } from '../types/checkbox';

export const useCheckboxState = (initialData: CheckboxData) => {
  const [state, setState] = useState<CheckboxState>(() => {
    const categories: Record<string, CategoryState> = {};
    
    Object.entries(initialData.categories).forEach(([key, category]) => {
      categories[key] = {
        checked: false,
        indeterminate: false,
        items: category.items.map(item => ({
          ...item,
          checked: false,
        })),
      };
    });

    return {
      selectAll: { checked: false, indeterminate: false },
      categories,
    };
  });

  const updateCategoryState = useCallback((categoryKey: string, items: any[]) => {
    const checkedItems = items.filter(item => item.checked);
    const allChecked = checkedItems.length === items.length;
    const someChecked = checkedItems.length > 0;

    return {
      checked: allChecked,
      indeterminate: someChecked && !allChecked,
    };
  }, []);

  const updateSelectAllState = useCallback((categories: Record<string, CategoryState>) => {
    const allItems = Object.values(categories).flatMap(category => category.items);
    const checkedItems = allItems.filter(item => item.checked);
    const allChecked = checkedItems.length === allItems.length;
    const someChecked = checkedItems.length > 0;

    return {
      checked: allChecked,
      indeterminate: someChecked && !allChecked,
    };
  }, []);

  const toggleSelectAll = useCallback(() => {
    setState(prevState => {
      const newSelectAllState = !prevState.selectAll.checked;
      const newCategories: Record<string, CategoryState> = {};

      Object.entries(prevState.categories).forEach(([key, category]) => {
        newCategories[key] = {
          checked: newSelectAllState,
          indeterminate: false,
          items: category.items.map(item => ({
            ...item,
            checked: newSelectAllState,
          })),
        };
      });

      return {
        selectAll: { checked: newSelectAllState, indeterminate: false },
        categories: newCategories,
      };
    });
  }, []);

  const toggleCategory = useCallback((categoryKey: string) => {
    setState(prevState => {
      const category = prevState.categories[categoryKey];
      const newCheckedState = !category.checked;
      
      const newCategories = {
        ...prevState.categories,
        [categoryKey]: {
          checked: newCheckedState,
          indeterminate: false,
          items: category.items.map(item => ({
            ...item,
            checked: newCheckedState,
          })),
        },
      };

      const selectAllState = updateSelectAllState(newCategories);

      return {
        selectAll: selectAllState,
        categories: newCategories,
      };
    });
  }, [updateSelectAllState]);

  const toggleItem = useCallback((categoryKey: string, itemId: string) => {
    setState(prevState => {
      const category = prevState.categories[categoryKey];
      const newItems = category.items.map(item =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      );

      const categoryState = updateCategoryState(categoryKey, newItems);

      const newCategories = {
        ...prevState.categories,
        [categoryKey]: {
          ...categoryState,
          items: newItems,
        },
      };

      const selectAllState = updateSelectAllState(newCategories);

      return {
        selectAll: selectAllState,
        categories: newCategories,
      };
    });
  }, [updateCategoryState, updateSelectAllState]);

  return {
    state,
    toggleSelectAll,
    toggleCategory,
    toggleItem,
  };
};