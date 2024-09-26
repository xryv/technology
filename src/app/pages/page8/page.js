'use client'; // Mark as Client Component

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

const Page1 = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/data/page1.json');
      const data = await response.json();
      setContent(data);
    };
    fetchContent();
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{content.header.title}</h1>
        <p className={styles.tagline}>{content.header.tagline}</p>
      </header>

      <section className={styles.overview}>
        <h2>{content.overview.title}</h2>
        <p>{content.overview.text}</p>
      </section>

      <section className={styles.team}>
        <h2>{content.team.title}</h2>
        <p>{content.team.text}</p>
        <ul className={styles.teamList}>
          {content.team.members.map((member, index) => (
            <li key={index} className={styles.teamMember}>
              <strong>{member.name}</strong> - {member.role}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.useCase}>
        <h2>{content.concept.title}</h2>
        <div className={styles.problemSolution}>
          <h3>{content.concept.problem.title}</h3>
          <p>{content.concept.problem.text}</p>
          <h3>{content.concept.solution.title}</h3>
          <p>{content.concept.solution.text}</p>
        </div>
      </section>

      <section className={styles.features}>
        <h2>{content.features.title}</h2>
        <ul>
          {content.features.list.map((feature, index) => (
            <li key={index}>
              <h4>{feature.name}</h4>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.practicalUseCases}>
        <h2>{content.practicalUseCases.title}</h2>
        {content.practicalUseCases.useCases.map((useCase, index) => (
          <div key={index} className={styles.useCaseCard}>
            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
          </div>
        ))}
      </section>

      <section className={styles.future}>
        <h2>{content.future.title}</h2>
        <p>{content.future.text}</p>
      </section>

      <footer className={styles.footer}>
        <p>{content.footer.text}</p>
      </footer>
    </div>
  );
};

export default Page1;
