import React, { useState } from 'react';
import './Navbar.css'; 

const categories = [
  {
    name: 'Fashion',
    subcategories: [
      { 
        name: 'Men', 
        subcategories: [
          { name: 'Clothing' }, 
          { name: 'Shoes' }, 
          { name: 'Accessories' }
        ] 
      },
      { 
        name: 'Women', 
        subcategories: [
          { name: 'Clothing' }, 
          { name: 'Shoes' }, 
          { name: 'Accessories' }
        ] 
      },
      { 
        name: 'Kids', 
        subcategories: [
          { name: 'Clothing' }, 
          { name: 'Shoes' }, 
          { name: 'Accessories' }
        ] 
      }
    ]
  },
  {
    name: 'Electronics',
    subcategories: [
      { 
        name: 'Mobile Phones', 
        subcategories: [
          { name: 'Smartphones' }, 
          { name: 'Basic Phones' }
        ] 
      },
      { 
        name: 'Computers', 
        subcategories: [
          { name: 'Laptops' }, 
          { name: 'Desktops' }, 
          { name: 'Tablets' }
        ] 
      },
      { 
        name: 'Accessories', 
        subcategories: [
          { name: 'Chargers' }, 
          { name: 'Cables' }, 
          { name: 'Cases' }
        ] 
      }
    ]
  },
  {
    name: 'Home & Garden',
    subcategories: [
      { 
        name: 'Furniture', 
        subcategories: [
          { name: 'Living Room' }, 
          { name: 'Bedroom' }, 
          { name: 'Kitchen' }
        ] 
      },
      { 
        name: 'Appliances', 
        subcategories: [
          { name: 'Kitchen Appliances' }, 
          { name: 'Home Appliances' }
        ] 
      },
      { 
        name: 'Décor', 
        subcategories: [
          { name: 'Wall Art' }, 
          { name: 'Lighting' }, 
          { name: 'Decorative Items' }
        ] 
      }
    ]
  }
];

const ExpandableDropdown = ({ category }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <li 
      onMouseEnter={handleToggle} 
      onMouseLeave={handleToggle}
      className="dropdown"
    >
      {category.name}
      {expanded && category.subcategories && (
        <ul className="submenu">
          {category.subcategories.map((subcategory, index) => (
            <li key={index}>
              {subcategory.subcategories ? (
                <ExpandableDropdown key={index} category={subcategory} />
              ) : (
                subcategory.name
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {categories.map((category, index) => (
          <ExpandableDropdown key={index} category={category} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
