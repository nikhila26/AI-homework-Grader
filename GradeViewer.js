import React, { useState } from 'react';
import styles from './GradeViewer.module.css'; // Ensure this is the correct path

const randomGrade = () => {
  const grades = ['A', 'B', 'C', 'D'];
  return grades[Math.floor(Math.random() * grades.length)]; // Randomly select a grade
};

const getCommentForGrade = (grade) => {
  switch (grade) {
    case 'A':
      return 'Excellent work!';
    case 'B':
      return 'Good, but check your calculations.';
    case 'C':
      return 'Adequate, but needs improvement.';
    case 'D':
      return 'Insufficient, please revisit the material.';
    default:
      return 'No comment available.';
  }
};

function GradeViewer() {
  const [selectedSubject, setSelectedSubject] = useState('Math');
  const [selectedAssignment, setSelectedAssignment] = useState('');

  const grades = {
    Math: Array.from({ length: 10 }, (_, i) => ({
      id: `Math Assignment ${i + 1}`,
      grade: randomGrade(),
    })),
    Science: Array.from({ length: 10 }, (_, i) => ({
      id: `Science Assignment ${i + 1}`,
      grade: randomGrade(),
    })),
    History: Array.from({ length: 10 }, (_, i) => ({
      id: `History Assignment ${i + 1}`,
      grade: randomGrade(),
    })),
    English: Array.from({ length: 10 }, (_, i) => ({
      id: `English Assignment ${i + 1}`,
      grade: randomGrade(),
    })),
    Geography: Array.from({ length: 10 }, (_, i) => ({
      id: `Geography Assignment ${i + 1}`,
      grade: randomGrade(),
    })),
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    setSelectedAssignment(''); // Reset the selected assignment
  };

  const handleAssignmentChange = (event) => {
    setSelectedAssignment(event.target.value);
  };

  const selectedSubjectData = grades[selectedSubject] || [];
  const selectedAssignmentDetails = selectedSubjectData.find(assignment => assignment.id === selectedAssignment);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Grade Details</h1>
      <div className={styles.selectContainer}>
        <label className={styles.label}>
          Select Subject:
          <select className={styles.select} value={selectedSubject} onChange={handleSubjectChange}>
            {Object.keys(grades).map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </label>
        <label className={styles.label}>
          Select Assignment:
          <select className={styles.select} value={selectedAssignment} onChange={handleAssignmentChange}>
            <option value="">--Select an Assignment--</option>
            {selectedSubjectData.map((assignment) => (
              <option key={assignment.id} value={assignment.id}>{assignment.id}</option>
            ))}
          </select>
        </label>
      </div>
      {selectedAssignmentDetails && (
        <div className={styles.gradeDetails}>
          <h2>{selectedAssignmentDetails.id}</h2>
          <p className={styles.grade}>Grade: {selectedAssignmentDetails.grade}</p>
          <p className={styles.comment}>Comment: {getCommentForGrade(selectedAssignmentDetails.grade)}</p>
        </div>
      )}
    </div>
  );
}

export default GradeViewer;
