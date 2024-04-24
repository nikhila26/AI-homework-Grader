import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeworkList.module.css'; // Import the CSS module

function HomeworkList() {
  const [subjects, setSubjects] = useState({});

  useEffect(() => {
    // Simulate fetching this data from a server
    setSubjects({
      'Math': Array.from({ length: 10 }, (_, i) => ({ id: `math-${i+1}`, title: `Math Homework ${i+1}` })),
      'Science': Array.from({ length: 10 }, (_, i) => ({ id: `science-${i+1}`, title: `Science Homework ${i+1}` })),
      'History': Array.from({ length: 10 }, (_, i) => ({ id: `history-${i+1}`, title: `History Homework ${i+1}` })),
      'English': Array.from({ length: 10 }, (_, i) => ({ id: `english-${i+1}`, title: `English Homework ${i+1}` })),
      'Geography': Array.from({ length: 10 }, (_, i) => ({ id: `geography-${i+1}`, title: `Geography Homework ${i+1}` })),
    });
  }, []);

  return (
    <div className={styles.homeworkListContainer}>
      <h1 className={styles.homeworkListTitle}>Homework List</h1>
      {Object.entries(subjects).map(([subject, assignments]) => (
        <div key={subject} className={styles.subjectSection}>
          <h2 className={styles.subjectTitle}>{subject}</h2>
          <ul className={styles.assignmentList}>
            {assignments.map(hw => (
              <li key={hw.id} className={styles.assignmentItem}>
                <Link to={`/view-homework/${hw.id}`} className={styles.assignmentLink}>{hw.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default HomeworkList;
