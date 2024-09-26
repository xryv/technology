"use client";

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link'; // Import Link for navigation

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false); // State to toggle showing all items

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // List of available technology pages (you may dynamically load this from the pages directory)
  const pages = [
    { title: 'Quantum Convergence Processor', path: 'pages/page1' },
    { title: 'Quantum MindMesh', path: 'pages/page2' },
    { title: 'Quantum EcoSphere', path: 'pages/page3' },
    { title: 'Quantum Neural Synthesizer', path: 'pages/page4' },
    { title: 'Quantum BioHarmonics Device', path: 'pages/page5' },
    { title: 'Quantum Health Nexus', path: 'pages/page6' },
    { title: 'Quantum Energy Matrix', path: 'pages/page7' },
    { title: 'Quantum SecureComm', path: 'pages/page8' },
    { title: 'Quantum Reality Enhancer', path: 'pages/page9' },
    { title: 'Quantum Space Navigator', path: 'pages/page10' },
  ];

  const filteredPages = pages.filter(page => 
    page.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedPages = showAll ? filteredPages : filteredPages.slice(0, 5);

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Discover the Future of Technology
        </h1>
        <p className={styles.subtitle}>
          Find groundbreaking technologies and the visionaries behind them.
        </p>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search for a technology..."
            value={searchTerm}
            onChange={handleSearch}
            className={styles.searchInput}
            aria-label="Search for technology"
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>
      </div>

      <div className={styles.pagesList}>
        <h2 className={styles.listTitle}>Latest Technologies</h2>
        <ul className={styles.pageLinks}>
          {displayedPages.map((page) => (
            <li key={page.path} className={styles.pageItem}>
              <Link href={page.path} className={styles.pageLink}>
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
        {filteredPages.length > 5 && (
          <button 
            className={styles.showMoreButton} 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </div>
  );
}
