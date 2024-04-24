import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './HomeworkCreator.module.css'; // Import the CSS module

function HomeworkViewer() {
  const { id } = useParams();
  const [homework, setHomework] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    // Simulate fetching homework data
    setHomework({ id, title: `${id.split('-')[0]} Homework`, description: 'Complete all problems.' });
  }, [id]);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const submitHomework = () => {
    // Simulated grading system
    const grades = ['A', 'B', 'C', 'D'];
    const assignmentNumber = parseInt(id.split('-')[1]);
    const gradeIndex = (assignmentNumber - 1) % grades.length;
    const grade = grades[gradeIndex];
    const comments = {
      'A': 'Excellent work!',
      'B': 'Good, but check your calculations.',
      'C': 'Adequate, but needs improvement.',
      'D': 'Insufficient, please revisit the material.'
    };

    alert(`Grade: ${grade}, Comment: ${comments[grade]}`);
  };

  if (!homework) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.homeworkViewerContainer}>
      <h1 className={styles.homeworkTitle}>{homework.title}</h1>
      <p className={styles.homeworkDescription}>{homework.description}</p>
      <input type="file" onChange={handleFileUpload} className={styles.fileInput} />
      {file && <p className={styles.fileDetails}>File uploaded: {file.name}</p>}
      <button onClick={submitHomework} className={styles.submitButton}>Submit Homework</button>
    </div>
  );
}

export default HomeworkViewer;
