import React from 'react';
import './HappyCustomers.css';
import h1 from '../../assets/HappyC/h1.png'
import h2 from '../../assets/HappyC/h2.png'
import h3 from '../../assets/HappyC/h3.png'
import h4 from '../../assets/HappyC/h4.png'
import h5 from '../../assets/HappyC/h5.png'
import h6 from '../../assets/HappyC/h6.png'
import h7 from '../../assets/HappyC/h7.png'
import h8 from '../../assets/HappyC/h8.png'
import h9 from '../../assets/HappyC/h9.png'
import h10 from '../../assets/HappyC/h10.png'
import h11 from '../../assets/HappyC/h11.png'
import h12 from '../../assets/HappyC/h12.png'


function HappyCustomers() {
  const portfolioItems = [
    {
      id: 1,
      src: h1,
      alt: "Urban architecture",
      size: "medium"
    },
    {
      id: 2,
      src: h2,
      alt: "Mountain landscape",
      size: "tall"
    },
    {
      id: 3,
      src: h3,
      alt: "Architectural detail",
      size: "medium"
    },
    {
      id: 4,
      src: h4,
      alt: "Nature landscape",
      size: "large"
    },
    {
      id: 5,
      src: h5,
      alt: "Forest path",
      size: "wide"
    },
    {
      id: 6,
      src: h6,
      alt: "Minimalist design",
      size: "square"
    },
    {
      id: 7,
      src: h7,
      alt: "City view",
      size: "medium"
    },
    {
      id: 8,
      src: h8,
      alt: "Abstract composition",
      size: "tall"
    },
    {
      id: 9,
      src: h9,
      alt: "Technology concept",
      size: "wide"
    },
    {
      id: 10,
      src: h10,
      alt: "Workspace",
      size: "medium"
    },
    {
      id: 11,
      src: h11,
      alt: "Creative space",
      size: "large"
    },
    {
      id: 12,
      src: h12,
      alt: "Interior design",
      size: "square"
    }
  ];

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Happy Customers</h1>
      
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className={`portfolio-item ${item.size}`}>
            <img 
              src={item.src} 
              alt={item.alt}
              className="portfolio-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HappyCustomers;