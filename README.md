# DataVinci Assignment - Responsive Layout & Nested Checkboxes

This project demonstrates the implementation of responsive design and advanced nested checkbox functionality as part of the DataVinci technical assignment.

## 🎯 Assignment Overview

### Task 1: Responsive Layout Implementation
- **Objective**: Create a fully responsive layout that works seamlessly across desktop and mobile devices
- **Key Features**: 
  - Mobile-first responsive design
  - Collapsible navigation with hamburger menu
  - Multi-column to single-column layout transitions
  - Accessibility-compliant design

### Task 2: Nested Checkbox Component
- **Objective**: Implement intelligent checkbox hierarchy with proper state management
- **Key Features**:
  - Select All functionality
  - Parent-child checkbox relationships
  - Indeterminate states for partial selections
  - Real-time state synchronization

## 🚀 Features Implemented

### Responsive Design
- **Mobile-first approach** with breakpoints at 768px and 1024px
- **Hamburger menu** that smoothly animates on mobile devices
- **Flexible grid layouts** that adapt from multi-column (desktop) to single-column (mobile)
- **Consistent spacing** using 8px grid system across all screen sizes
- **Smooth animations** and hover states for enhanced user experience

### Nested Checkbox Logic
- **Select All**: Checks/unchecks all categories and items
- **Parent Categories**: Automatically select/deselect all children
- **Child Items**: Update parent state based on selection count
- **Indeterminate State**: Shows partial selection with minus icon
- **State Propagation**: Bidirectional updates (parent ↔ children)

### Design Excellence
- **Modern color system** with primary blue (#3B82F6) and complementary colors
- **Typography hierarchy** with proper font weights and line spacing
- **Apple-level aesthetics** with subtle shadows and rounded corners
- **Accessible contrast ratios** meeting WCAG guidelines
- **Micro-interactions** that provide clear visual feedback

## 🛠️ Technical Implementation

### Project Structure
```
src/
├── components/
│   ├── Header.tsx          # Responsive navigation with mobile menu
│   ├── Hero.tsx           # Hero section with call-to-action
│   ├── Features.tsx       # Feature showcase grid
│   ├── CheckboxDemo.tsx   # Demo section wrapper
│   ├── NestedCheckbox.tsx # Main checkbox logic component
│   ├── Checkbox.tsx       # Reusable checkbox component
│   └── Footer.tsx         # Footer with links and contact info
├── types/
│   └── checkbox.ts        # TypeScript interfaces
├── App.tsx               # Main app component
├── main.tsx             # App entry point
└── index.css           # Tailwind CSS imports
```

### Key Technologies
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for responsive styling and design system
- **Lucide React** for consistent iconography
- **Vite** for fast development and building

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) for main actions and branding
- **Secondary**: Slate (#64748B) for secondary text and elements
- **Accent**: Purple gradient for visual interest
- **Neutrals**: Gray scale for backgrounds and borders

### Typography
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Line Heights**: 150% for body text, 120% for headings
- **Responsive Sizing**: Scales appropriately across devices

### Spacing
- **8px Grid System**: All spacing uses multiples of 8px
- **Consistent Margins**: Maintains visual rhythm throughout
- **Responsive Padding**: Adapts to screen size constraints

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` - Single column layout, hamburger menu
- **Tablet**: `768px - 1024px` - Transition layouts, some grid adjustments
- **Desktop**: `> 1024px` - Full multi-column layouts, expanded navigation

## 🧪 Testing Scenarios

### Responsive Layout
1. Resize browser from desktop to mobile width
2. Verify navigation collapses into hamburger menu
3. Check that all content reflows appropriately
4. Test touch interactions on mobile devices

### Checkbox Functionality
1. **Select All Test**: Click "Select All" → All items should be checked
2. **Deselect All Test**: Uncheck "Select All" → All items should be unchecked
3. **Parent Selection**: Check "Fruits" → All fruit items should be selected
4. **Partial Selection**: Select some fruits → "Fruits" should show indeterminate state
5. **Child Selection**: Select individual items → Parent state should update accordingly

## 🏁 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📹 Video Walkthrough Structure

When recording your Loom video (3-5 minutes), consider this structure:

1. **Introduction (30-45s)**
   - Introduce yourself and the assignment
   - Brief overview of what you've built

2. **Code Walkthrough (1-2 minutes)**
   - Show the component structure and organization
   - Explain the responsive design approach
   - Highlight the checkbox logic implementation

3. **Demo (1-2 minutes)**
   - Demonstrate desktop layout
   - Show mobile responsiveness by resizing browser
   - Test all checkbox scenarios step by step

4. **Closing (15-20s)**
   - Summarize the solution
   - Mention potential future improvements

## 💡 Implementation Highlights

- **Modular Architecture**: Each component has a single responsibility
- **Type Safety**: Full TypeScript implementation with proper interfaces
- **Performance**: Optimized state updates and minimal re-renders
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support
- **Maintainability**: Clean code structure with clear separation of concerns

## 🔧 Technical Decisions

1. **State Management**: Used React's built-in state management for simplicity
2. **Component Architecture**: Separated concerns between UI and logic components
3. **Styling Strategy**: Utility-first approach with Tailwind CSS
4. **Type System**: Comprehensive TypeScript interfaces for data structures

This implementation showcases modern React development practices while fulfilling all assignment requirements with production-ready code quality.
