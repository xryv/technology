// Footer.js
'use client'; // Mark as Client Component

import React, { useState } from 'react';
import Link from 'next/link'; // Ensure to import Link for navigation
import styles from './footer.module.css'; // Import CSS for styling

export default function Footer() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h1 className={styles.footerTitle}>Aethereal Nexus</h1>
        <p className={styles.footerReserved}>Reserved</p>

        {/* Search Bar in Footer */}
        <div className={styles.footerSearchBox}>
          <input
            type="text"
            placeholder="Search for technologies..."
            value={searchTerm}
            onChange={handleSearch}
            className={styles.footerSearchInput}
            aria-label="Search for technologies"
          />
          <span className={styles.footerSearchIcon} role="img" aria-label="Search icon">🔍</span>
        </div>

        {/* Home Icon */}
        <Link href="/" className={styles.homeIcon} aria-label="Home">
          🏠
        </Link>
      </div>
    </footer>
  );
}
