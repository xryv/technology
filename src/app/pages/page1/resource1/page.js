"use client";

import React, { useState, useEffect } from 'react';
import data from './data/data.json'; // Import the shipping data directly
import styles from './page.module.css'; // Import the CSS module

const Page = () => {
  const [shippingList, setShippingList] = useState(null);

  useEffect(() => {
    // Simulate fetching data with a delay (if necessary)
    setShippingList(data);
  }, []);

  if (!shippingList) {
    return <div>Loading shipping list...</div>;
  }
  
  return (
    <div className={styles['shipping-list']}> {/* Apply the local class here */}
      <h1>{shippingList.Title}</h1> {/* Use the title from shippingList.json */}
      <section>
        <h2>Components and Materials</h2>
        <ul>
          {Object.entries(shippingList.ComponentsAndMaterials).map(([key, items]) => (
            <li key={key}>
              <strong>{key.replace(/([A-Z])/g, ' $1')}</strong>
              <ul>
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Software and Algorithms</h2>
        <ul>
          {Object.entries(shippingList.SoftwareAndAlgorithms).map(([key, items]) => (
            <li key={key}>
              <strong>{key.replace(/([A-Z])/g, ' $1')}</strong>
              <ul>
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Safety and Protocols</h2>
        <ul>
          {Object.entries(shippingList.SafetyAndProtocols).map(([key, items]) => (
            <li key={key}>
              <strong>{key.replace(/([A-Z])/g, ' $1')}</strong>
              <ul>
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Research and Testing Equipment</h2>
        <ul>
          {Object.entries(shippingList.ResearchAndTestingEquipment).map(([key, items]) => (
            <li key={key}>
              <strong>{key.replace(/([A-Z])/g, ' $1')}</strong>
              <ul>
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Personnel and Expertise</h2>
        <ul>
          {Object.entries(shippingList.PersonnelAndExpertise).map(([key, items]) => (
            <li key={key}>
              <strong>{key.replace(/([A-Z])/g, ' $1')}</strong>
              <ul>
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Additional Resources</h2>
        <ul>
          {Object.entries(shippingList.AdditionalResources).map(([key, items]) => (
            <li key={key}>
              <strong>{key.replace(/([A-Z])/g, ' $1')}</strong>
              <ul>
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Page;
