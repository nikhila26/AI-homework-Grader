import React, { useState, useEffect } from 'react';

function GradeViewer() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    // Assuming there's only one set of grades for simplicity
    const storedGrades = JSON.parse(localStorage.getItem('grades_1')) || []; // Use the correct ID as needed
    setGrades(storedGrades);
  }, []);

  return (
    <div>
      <h1>Grades</h1>
      <p>Here you can view your grades after submission.</p>
      {grades.length > 0 ? (
        grades.map((grade, index) => (
          <div key={index}>
            <p>Question: {grade.question}</p>
            <p>Your Answer: {grade.yourAnswer}</p>
            <p>Correct Answer: {grade.correctAnswer}</p>
            <p>Result: {grade.correct ? 'Correct' : 'Incorrect'}</p>
          </div>
        ))
      ) : (
        <p>No grades available.</p>
      )}
    </div>
  );
}

export default GradeViewer;
